import { Term } from './models';
import { GLOSSARY } from '../data/glossary.data';

export interface VocabSegment {
  text: string;
  /** Present when this run of text is a glossary term the reader can look up. */
  term?: Term;
}

interface Pattern {
  /** Lower-cased for ASCII patterns; as written for Japanese. */
  probe: string;
  ascii: boolean;
  term: Term;
}

const ASCII_WORD = /[A-Za-z0-9]/;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * The English wordings of a term that are worth marking up in prose.
 *
 * "earthing (grounding) work" reads as "earthing work" with the gloss taken
 * out, and a TRAILING parenthetical is a genuine synonym rather than a gloss,
 * so "allowable current (ampacity)" yields both "allowable current" and
 * "ampacity" — the second being the word a newcomer is far more likely to trip
 * over. Where the name offers alternatives with a slash, only a multi-word
 * first alternative is used: "distribution board / consumer unit" gives
 * "distribution board", while "combined / equivalent resistance" gives nothing,
 * because marking up the bare word "combined" would be nonsense.
 */
function englishNames(term: Term): string[] {
  const names: string[] = [];

  const trailing = term.en.match(/\(([^)]+)\)\s*$/);
  if (trailing) {
    const alias = trailing[1].trim();
    if (alias.length >= 3 && /^[A-Za-z][A-Za-z0-9\s-]*$/.test(alias) && !alias.includes('/')) {
      names.push(alias);
    }
  }

  let primary = term.en
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (primary.includes('/')) {
    const head = primary.split('/')[0].trim();
    primary = head.includes(' ') ? head : '';
  }
  primary = primary.split('—')[0].trim();
  if (primary.length >= 4) names.push(primary);

  return names;
}

/**
 * English words too common to mark up usefully — they would pepper the page
 * without teaching anything, and each already has its own glossary row.
 */
const TOO_GENERIC = new Set([
  'work',
  'time',
  'phase',
  'type',
  'area',
  'length',
  'diameter',
  'tester',
  'drop',
  'riser',
  'slip',
]);

let cache: { patterns: Pattern[]; regex: RegExp } | null = null;

function matcher(): { patterns: Pattern[]; regex: RegExp } {
  if (cache) return cache;

  const patterns: Pattern[] = [];
  const seen = new Set<string>();

  const add = (probe: string, ascii: boolean, term: Term) => {
    const key = (ascii ? probe.toLowerCase() : probe) + (ascii ? '#a' : '#j');
    if (probe.length === 0 || seen.has(key)) return;
    seen.add(key);
    patterns.push({ probe: ascii ? probe.toLowerCase() : probe, ascii, term });
  };

  for (const term of GLOSSARY) {
    add(term.jp, false, term);
    for (const name of englishNames(term)) {
      if (!TOO_GENERIC.has(name.toLowerCase())) add(name, true, term);
    }
  }

  // Longest first, so 単相3線式 beats 単相 and "current reduction factor"
  // beats "current".
  patterns.sort((a, b) => b.probe.length - a.probe.length);

  const regex = new RegExp(patterns.map((p) => escapeRegExp(p.probe)).join('|'), 'gi');
  cache = { patterns, regex };
  return cache;
}

/**
 * Marks up a run of prose with the glossary terms it contains.
 *
 * Only the first occurrence of each term in the string is marked: a paragraph
 * that says "current" five times gets one dotted word, not five.
 */
export function annotateProse(text: string): VocabSegment[] {
  const { patterns, regex } = matcher();
  const byProbe = new Map(patterns.map((p) => [p.probe, p]));

  const segments: VocabSegment[] = [];
  const used = new Set<string>();
  let cursor = 0;

  regex.lastIndex = 0;
  for (const match of text.matchAll(regex)) {
    const start = match.index;
    const end = start + match[0].length;
    if (start < cursor) continue;

    const pattern = byProbe.get(match[0]) ?? byProbe.get(match[0].toLowerCase());
    if (!pattern) continue;

    // An English name must stand as its own word, so "current" does not fire
    // inside "concurrent".
    if (pattern.ascii) {
      const before = start > 0 ? text[start - 1] : '';
      const after = end < text.length ? text[end] : '';
      if (ASCII_WORD.test(before) || ASCII_WORD.test(after)) continue;
    }

    if (used.has(pattern.term.jp)) continue;
    used.add(pattern.term.jp);

    if (start > cursor) segments.push({ text: text.slice(cursor, start) });
    segments.push({ text: match[0], term: pattern.term });
    cursor = end;
  }

  if (cursor < text.length) segments.push({ text: text.slice(cursor) });
  return segments.length > 0 ? segments : [{ text }];
}

/** True when the prose contains at least one term worth marking up. */
export function hasVocab(text: string): boolean {
  return annotateProse(text).some((s) => s.term);
}

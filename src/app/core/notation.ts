import { SymbolDef } from './models';

export interface Segment {
  text: string;
  /** Present when this run of text is a symbol the reader can look up. */
  symbol?: SymbolDef;
}

/** Characters that may not sit directly beside a token, so that `I` does not
 *  match inside `I_M`, `I₁` or an English word. Superscripts are deliberately
 *  excluded so that `I` still matches in `I²R`. */
const WORD = /[A-Za-z0-9_₀-₉]/;

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Splits an expression into plain text and lookup-able symbols.
 *
 * Longer tokens are matched first, so `I_M` wins over `I`, and a match is only
 * accepted when it is not glued to a neighbouring word character.
 */
export function annotate(expression: string, symbols: readonly SymbolDef[] = []): Segment[] {
  if (symbols.length === 0) return [{ text: expression }];

  const byToken = new Map<string, SymbolDef>();
  for (const symbol of symbols) {
    if (!byToken.has(symbol.token)) byToken.set(symbol.token, symbol);
  }

  const pattern = [...byToken.keys()]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');
  const regex = new RegExp(pattern, 'g');

  const segments: Segment[] = [];
  let cursor = 0;

  for (const match of expression.matchAll(regex)) {
    const start = match.index;
    const end = start + match[0].length;
    const before = start > 0 ? expression[start - 1] : '';
    const after = end < expression.length ? expression[end] : '';
    if (WORD.test(before) || WORD.test(after)) continue;

    if (start > cursor) segments.push({ text: expression.slice(cursor, start) });
    segments.push({ text: match[0], symbol: byToken.get(match[0]) });
    cursor = end;
  }

  if (cursor < expression.length) segments.push({ text: expression.slice(cursor) });
  return segments;
}

/** The distinct symbols that actually appear in the given text. */
export function usedSymbols(expression: string, symbols: readonly SymbolDef[] = []): SymbolDef[] {
  const seen = new Set<string>();
  const out: SymbolDef[] = [];
  for (const segment of annotate(expression, symbols)) {
    if (segment.symbol && !seen.has(segment.symbol.token)) {
      seen.add(segment.symbol.token);
      out.push(segment.symbol);
    }
  }
  return out;
}

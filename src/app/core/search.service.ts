import { Injectable } from '@angular/core';
import { GLOSSARY } from '../data/glossary.data';
import { LESSONS } from '../data/lessons.data';
import { SYMBOLS } from '../data/symbols.data';
import { FORMULAS } from '../data/formulas.data';

export interface SearchHit {
  kind: 'term' | 'lesson' | 'symbol' | 'formula';
  title: string;
  subtitle: string;
  jp?: string;
  link: (string | number)[];
  fragment?: string;
}

/** Strips macrons and case so that "koji", "kōji" and "KŌJI" all match. */
export function normalise(value: string): string {
  return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  search(query: string, limit = 30): SearchHit[] {
    const q = normalise(query.trim());
    if (q.length === 0) return [];

    const hits: SearchHit[] = [];

    for (const t of GLOSSARY) {
      if (
        t.jp.includes(query) ||
        t.kana.includes(query) ||
        normalise(t.romaji).includes(q) ||
        normalise(t.en).includes(q)
      ) {
        hits.push({
          kind: 'term',
          title: t.en,
          subtitle: `${t.kana} ・ ${t.romaji}`,
          jp: t.jp,
          link: ['/glossary'],
          fragment: encodeURIComponent(t.jp),
        });
      }
    }

    for (const l of LESSONS) {
      if (
        normalise(l.title).includes(q) ||
        normalise(l.summary).includes(q) ||
        l.titleJp.includes(query)
      ) {
        hits.push({
          kind: 'lesson',
          title: l.title,
          subtitle: l.summary,
          jp: l.titleJp,
          link: ['/lessons', l.id],
        });
      }
    }

    for (const s of SYMBOLS) {
      if (
        normalise(s.en).includes(q) ||
        s.jp.includes(query) ||
        s.kana.includes(query) ||
        normalise(s.romaji).includes(q)
      ) {
        hits.push({ kind: 'symbol', title: s.en, subtitle: s.note, jp: s.jp, link: ['/symbols'] });
      }
    }

    for (const f of FORMULAS) {
      if (normalise(f.title).includes(q) || f.titleJp.includes(query)) {
        hits.push({
          kind: 'formula',
          title: f.title,
          subtitle: f.expression.split('\n')[0],
          jp: f.titleJp,
          link: ['/formulas'],
        });
      }
    }

    return hits.slice(0, limit);
  }
}

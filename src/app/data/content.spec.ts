import { describe, expect, it } from 'vitest';
import { LESSONS } from './lessons.data';
import { QUESTIONS } from './questions.data';
import { GLOSSARY } from './glossary.data';
import { SYMBOLS } from './symbols.data';
import { CIRCUITS } from './circuits.data';
import { CATEGORY_MAP } from './categories.data';
import { FORMULAS } from './formulas.data';
import { usedSymbols } from '../core/notation';
import { explainFor } from '../core/terms';
import { Term } from '../core/models';

describe('content integrity', () => {
  it('gives every lesson a unique id and a known category', () => {
    const ids = LESSONS.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(LESSONS.every((l) => CATEGORY_MAP.has(l.category))).toBe(true);
  });

  it('gives every question a unique id, four options and a valid answer index', () => {
    const ids = QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const q of QUESTIONS) {
      expect(q.options).toHaveLength(4);
      expect(q.answer).toBeGreaterThanOrEqual(0);
      expect(q.answer).toBeLessThan(q.options.length);
      expect(q.explain.length).toBeGreaterThan(10);
      expect(CATEGORY_MAP.has(q.category)).toBe(true);
    }
  });

  it('gives every glossary term a reading, romaji and meaning', () => {
    const keys = GLOSSARY.map((t) => t.jp);
    expect(new Set(keys).size).toBe(keys.length);
    expect(GLOSSARY.every((t) => t.kana && t.romaji && t.en)).toBe(true);
  });

  it('gives every symbol an svg body', () => {
    expect(SYMBOLS.every((s) => s.svg.includes('<'))).toBe(true);
  });

  it('only wires circuit edges between declared nodes', () => {
    for (const circuit of CIRCUITS) {
      const ids = new Set(circuit.nodes.map((n) => n.id));
      for (const edge of circuit.edges) {
        expect(ids.has(edge.from)).toBe(true);
        expect(ids.has(edge.to)).toBe(true);
      }
    }
  });
});

describe('calculation symbols', () => {
  it('only declares symbols that really appear in the expression', () => {
    const unused: string[] = [];

    for (const f of FORMULAS) {
      const shown = new Set(usedSymbols(f.expression, f.symbols ?? []).map((s) => s.token));
      for (const symbol of f.symbols ?? []) {
        if (!shown.has(symbol.token)) unused.push(`formula ${f.id}: ${symbol.token}`);
      }
    }

    for (const lesson of LESSONS) {
      for (const block of lesson.blocks) {
        if (block.kind === 'formula') {
          const shown = new Set(
            usedSymbols(block.latexish, block.symbols ?? []).map((s) => s.token),
          );
          for (const symbol of block.symbols ?? []) {
            if (!shown.has(symbol.token))
              unused.push(`${lesson.id}/${block.caption}: ${symbol.token}`);
          }
        }
        if (block.kind === 'example') {
          const body = [block.question, ...block.steps, block.answer].join(' ');
          const shown = new Set(usedSymbols(body, block.symbols ?? []).map((s) => s.token));
          for (const symbol of block.symbols ?? []) {
            if (!shown.has(symbol.token)) unused.push(`${lesson.id}/example: ${symbol.token}`);
          }
        }
      }
    }

    expect(unused).toEqual([]);
  });

  it('gives every formula at least one tappable symbol', () => {
    const bare = FORMULAS.filter((f) => usedSymbols(f.expression, f.symbols ?? []).length === 0);
    expect(bare.map((f) => f.id)).toEqual([]);
  });
});

describe('beginner explanations', () => {
  it('explains every glossary term', () => {
    const bare = GLOSSARY.filter((t) => !t.explain || t.explain.trim().length === 0);
    expect(bare.map((t) => t.jp)).toEqual([]);
  });

  it('writes explanations long enough to actually explain something', () => {
    const thin = GLOSSARY.filter((t) => (t.explain ?? '').length < 60);
    expect(thin.map((t) => t.jp)).toEqual([]);
  });

  it('does not define a term with its own English name', () => {
    // "ballast: the ballast limits the current" teaches nothing.
    const circular = GLOSSARY.filter((t) => {
      const head = (t.explain ?? '').slice(0, 40).toLowerCase();
      const name = t.en.split(/[(/—]/)[0].trim().toLowerCase();
      return name.length > 4 && head.startsWith(name);
    });
    expect(circular.map((t) => t.jp)).toEqual([]);
  });

  it('resolves an explanation for every term written inline in a lesson', () => {
    const unexplained: string[] = [];
    for (const lesson of LESSONS) {
      for (const block of lesson.blocks) {
        if (block.kind !== 'terms') continue;
        for (const term of block.terms as Term[]) {
          if (!explainFor(term)) unexplained.push(`${lesson.id}: ${term.jp}`);
        }
      }
    }
    expect(unexplained).toEqual([]);
  });

  it('uses typographic apostrophes so the data stays single-quotable', () => {
    const bad = GLOSSARY.filter((t) => (t.explain ?? '').includes("'"));
    expect(bad.map((t) => t.jp)).toEqual([]);
  });
});

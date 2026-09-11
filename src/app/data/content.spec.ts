import { describe, expect, it } from 'vitest';
import { LESSONS } from './lessons.data';
import { QUESTIONS } from './questions.data';
import { GLOSSARY } from './glossary.data';
import { SYMBOLS } from './symbols.data';
import { CIRCUITS } from './circuits.data';
import { CATEGORY_MAP } from './categories.data';

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

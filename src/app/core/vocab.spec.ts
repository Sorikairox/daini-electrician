import { describe, expect, it } from 'vitest';
import { annotateProse } from './vocab';

const rendered = (text: string) =>
  annotateProse(text)
    .map((s) => s.text)
    .join('');

const marked = (text: string) =>
  annotateProse(text)
    .filter((s) => s.term)
    .map((s) => `${s.text}→${s.term!.jp}`);

describe('annotateProse', () => {
  it('never changes the text it is given', () => {
    const text = 'A 20 Ω resistor carries current, so the voltage drop matters.';
    expect(rendered(text)).toBe(text);
  });

  it('keeps a whitespace-only run between two marked terms', () => {
    // "current voltage" must not collapse to "currentvoltage".
    expect(rendered('current voltage')).toBe('current voltage');
  });

  it('marks a Japanese term', () => {
    expect(marked('接地工事をする')).toEqual(['接地工事→接地工事']);
  });

  it('marks the English name of a term', () => {
    expect(marked('Measure the earth resistance.')).toEqual(['earth resistance→接地抵抗']);
  });

  it('marks a trailing parenthetical synonym, which is the harder word', () => {
    // The glossary calls it "allowable current (ampacity)"; prose says ampacity.
    expect(marked('The ampacity of the cable')).toEqual(['ampacity→許容電流']);
    expect(marked('An RCD protects the circuit')).toEqual(['RCD→漏電遮断器']);
    expect(marked('Use a megger on a dead circuit')).toEqual(['megger→絶縁抵抗計']);
  });

  it('prefers the longest term at a given point', () => {
    expect(marked('単相3線式の回路')).toEqual(['単相3線式→単相3線式']);
    expect(marked('the current reduction factor applies')).toEqual([
      'current reduction factor→電流減少係数',
    ]);
  });

  it('does not mark an English name inside a longer word', () => {
    expect(marked('concurrent work is unaffected')).toEqual([]);
    expect(marked('a preconduit thing')).toEqual([]);
  });

  it('marks only the first occurrence in a run of text', () => {
    const hits = marked('current here, current there, and current everywhere');
    expect(hits).toEqual(['current→電流']);
  });

  it('is case-insensitive for English', () => {
    expect(marked('Voltage matters')).toEqual(['Voltage→電圧']);
  });

  it('leaves words too generic to be worth marking alone', () => {
    expect(marked('the work took time in that area')).toEqual([]);
  });

  it('does not mark a bare first alternative that would read as nonsense', () => {
    // 合成抵抗 is "combined / equivalent resistance" — "combined" alone is not a term.
    const hits = marked('combined with something else');
    expect(hits).toEqual([]);
  });

  it('returns one plain segment when nothing matches', () => {
    expect(annotateProse('nothing here at all')).toEqual([{ text: 'nothing here at all' }]);
  });
});

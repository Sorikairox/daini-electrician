import { describe, expect, it } from 'vitest';
import { annotate, usedSymbols } from './notation';
import { N } from '../data/notation.data';
import { SymbolDef } from './models';

const text = (expression: string, symbols: SymbolDef[]) =>
  annotate(expression, symbols)
    .map((s) => s.text)
    .join('');

const tokens = (expression: string, symbols: SymbolDef[]) =>
  annotate(expression, symbols)
    .filter((s) => s.symbol)
    .map((s) => s.text);

describe('annotate', () => {
  it('never changes the text it is given', () => {
    const expression = 'P = V I = I² R = V² / R';
    expect(text(expression, [N.P, N.V, N.I, N.R])).toBe(expression);
  });

  it('keeps whitespace-only runs between two symbols', () => {
    // "V I" must not collapse to "VI".
    const segments = annotate('V I', [N.V, N.I]);
    expect(segments.map((s) => s.text)).toEqual(['V', ' ', 'I']);
  });

  it('marks each symbol it knows', () => {
    expect(tokens('V = I × R', [N.V, N.I, N.R])).toEqual(['V', 'I', 'R']);
  });

  it('prefers the longest token', () => {
    expect(tokens('I_M > I_H', [N.I, N.IM, N.IH])).toEqual(['I_M', 'I_H']);
  });

  it('does not match a symbol glued to a subscript', () => {
    // Bare I must not light up inside I₁ / I₂.
    expect(tokens('I_neutral = | I₁ − I₂ |', [N.I, N.IN, N.I1, N.I2])).toEqual([
      'I_neutral',
      'I₁',
      'I₂',
    ]);
  });

  it('does match a symbol followed by a superscript', () => {
    expect(tokens('Z = √(R² + X²)', [N.Z, N.R, N.X])).toEqual(['Z', 'R', 'X']);
  });

  it('does not match inside an English word', () => {
    // "take" and "smaller" must not light up the k and e symbols.
    expect(tokens('take the smaller', [N.k, N.e])).toEqual([]);
  });

  it('leaves text alone when no symbols are supplied', () => {
    expect(annotate('V = I × R')).toEqual([{ text: 'V = I × R' }]);
  });

  it('handles regex metacharacters in a token', () => {
    const weird: SymbolDef = { token: 'A(x)', en: 'area' };
    expect(tokens('A(x) = 5', [weird])).toEqual(['A(x)']);
  });
});

describe('usedSymbols', () => {
  it('lists each symbol once, in the order it appears', () => {
    expect(usedSymbols('P = V I = I² R', [N.P, N.V, N.I, N.R]).map((s) => s.token)).toEqual([
      'P',
      'V',
      'I',
      'R',
    ]);
  });

  it('omits symbols that are not in the expression', () => {
    expect(usedSymbols('V = I × R', [N.V, N.I, N.R, N.cos]).map((s) => s.token)).not.toContain(
      'cosθ',
    );
  });
});

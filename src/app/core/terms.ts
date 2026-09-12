import { Term } from './models';
import { GLOSSARY } from '../data/glossary.data';

const BY_JP = new Map(GLOSSARY.map((t) => [t.jp, t]));

/**
 * The beginner explanation for a term. Terms written inline in a lesson do not
 * repeat an explanation that the glossary already carries — they inherit it,
 * so the wording only ever lives in one place.
 */
export function explainFor(term: Term): string | null {
  return term.explain ?? BY_JP.get(term.jp)?.explain ?? null;
}

export function glossaryTerm(jp: string): Term | undefined {
  return BY_JP.get(jp);
}

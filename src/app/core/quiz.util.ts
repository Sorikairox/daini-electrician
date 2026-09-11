import { CategoryId, Question } from './models';
import { QUESTIONS } from '../data/questions.data';

export function shuffle<T>(items: readonly T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function pickQuestions(
  category: CategoryId | 'all',
  count: number,
  ids?: string[],
): Question[] {
  let pool = QUESTIONS;
  if (ids) pool = pool.filter((q) => ids.includes(q.id));
  if (category !== 'all') pool = pool.filter((q) => q.category === category);
  return shuffle(pool).slice(0, count);
}

/** Mirrors the real paper: the 配線図 section alone is worth 20 of the 50 marks. */
export const MOCK_BLUEPRINT: { category: CategoryId; count: number }[] = [
  { category: 'theory', count: 5 },
  { category: 'wiring-design', count: 6 },
  { category: 'equipment', count: 7 },
  { category: 'installation', count: 5 },
  { category: 'inspection', count: 4 },
  { category: 'diagrams', count: 20 },
  { category: 'law', count: 3 },
];

export function buildMockExam(): Question[] {
  const out: Question[] = [];
  for (const part of MOCK_BLUEPRINT) {
    const pool = QUESTIONS.filter((q) => q.category === part.category);
    out.push(...shuffle(pool).slice(0, part.count));
  }
  return out;
}

/** Pass mark on the written paper is about 60 %. */
export const PASS_MARK = 30;

import { describe, expect, it } from 'vitest';
import { MOCK_BLUEPRINT, buildMockExam, pickQuestions, shuffle } from './quiz.util';
import { QUESTIONS } from '../data/questions.data';

describe('quiz utilities', () => {
  it('keeps every element when shuffling', () => {
    const input = [1, 2, 3, 4, 5];
    expect([...shuffle(input)].sort()).toEqual(input);
  });

  it('picks only questions of the requested category', () => {
    const picked = pickQuestions('law', 5);
    expect(picked.length).toBeGreaterThan(0);
    expect(picked.every((q) => q.category === 'law')).toBe(true);
  });

  it('never returns more questions than asked for', () => {
    expect(pickQuestions('all', 7)).toHaveLength(7);
  });

  it('builds a 50-question mock exam in the real proportions', () => {
    const exam = buildMockExam();
    expect(exam).toHaveLength(50);
    for (const part of MOCK_BLUEPRINT) {
      expect(exam.filter((q) => q.category === part.category)).toHaveLength(part.count);
    }
  });

  it('has enough questions in the bank for every mock-exam section', () => {
    for (const part of MOCK_BLUEPRINT) {
      const available = QUESTIONS.filter((q) => q.category === part.category).length;
      expect(available).toBeGreaterThanOrEqual(part.count);
    }
  });
});

import { Injectable, computed, effect, signal } from '@angular/core';
import { Box, CardState, CategoryId, QuizAttempt } from './models';
import { daysBetween, load, save, today } from './storage';
import { LESSONS } from '../data/lessons.data';
import { GLOSSARY } from '../data/glossary.data';
import { QUESTIONS } from '../data/questions.data';

/** Leitner intervals in days, index = box - 1. */
const INTERVALS = [0, 1, 3, 7, 21];

interface ProgressState {
  lessonsRead: string[];
  cards: Record<string, CardState>;
  attempts: QuizAttempt[];
  /** questionId -> number of times answered correctly / wrongly */
  qRight: Record<string, number>;
  qWrong: Record<string, number>;
  lastStudyDay: string;
  streak: number;
  bestStreak: number;
}

const EMPTY: ProgressState = {
  lessonsRead: [],
  cards: {},
  attempts: [],
  qRight: {},
  qWrong: {},
  lastStudyDay: '',
  streak: 0,
  bestStreak: 0,
};

@Injectable({ providedIn: 'root' })
export class ProgressStore {
  private readonly state = signal<ProgressState>({ ...EMPTY, ...load('progress', {}) });

  constructor() {
    effect(() => save('progress', this.state()));
  }

  /* ------------------------------------------------------------- lessons */

  readonly lessonsRead = computed(() => new Set(this.state().lessonsRead));
  readonly lessonProgress = computed(() => this.state().lessonsRead.length / LESSONS.length);

  isRead(id: string): boolean {
    return this.lessonsRead().has(id);
  }

  markRead(id: string, read = true): void {
    this.touch();
    this.state.update((s) => ({
      ...s,
      lessonsRead: read
        ? Array.from(new Set([...s.lessonsRead, id]))
        : s.lessonsRead.filter((l) => l !== id),
    }));
  }

  lessonsReadIn(category: CategoryId): number {
    const read = this.lessonsRead();
    return LESSONS.filter((l) => l.category === category && read.has(l.id)).length;
  }

  /* ---------------------------------------------------------- flashcards */

  readonly cards = computed(() => this.state().cards);

  cardState(key: string): CardState {
    return this.state().cards[key] ?? { box: 1, due: 0, seen: 0, correct: 0 };
  }

  readonly dueCount = computed(() => {
    const now = Date.now();
    const cards = this.state().cards;
    return GLOSSARY.filter((t) => (cards[t.jp]?.due ?? 0) <= now).length;
  });

  readonly masteredCount = computed(() => {
    const cards = this.state().cards;
    return GLOSSARY.filter((t) => (cards[t.jp]?.box ?? 1) >= 5).length;
  });

  gradeCard(key: string, correct: boolean): void {
    this.touch();
    const prev = this.cardState(key);
    const box = (correct ? Math.min(5, prev.box + 1) : 1) as Box;
    const due = Date.now() + INTERVALS[box - 1] * 86400000;
    this.state.update((s) => ({
      ...s,
      cards: {
        ...s.cards,
        [key]: { box, due, seen: prev.seen + 1, correct: prev.correct + (correct ? 1 : 0) },
      },
    }));
  }

  /* ---------------------------------------------------------------- quiz */

  readonly attempts = computed(() => this.state().attempts);

  readonly bestMock = computed(() => {
    const mocks = this.state().attempts.filter((a) => a.mode === 'mock');
    return mocks.length ? Math.max(...mocks.map((a) => a.correct)) : 0;
  });

  readonly answeredCount = computed(() => {
    const { qRight, qWrong } = this.state();
    return new Set([...Object.keys(qRight), ...Object.keys(qWrong)]).size;
  });

  readonly accuracy = computed(() => {
    const { qRight, qWrong } = this.state();
    const r = Object.values(qRight).reduce((a, b) => a + b, 0);
    const w = Object.values(qWrong).reduce((a, b) => a + b, 0);
    return r + w === 0 ? 0 : r / (r + w);
  });

  /** Questions answered wrongly more often than right — the review pile. */
  readonly weakQuestionIds = computed(() => {
    const { qRight, qWrong } = this.state();
    return QUESTIONS.filter((q) => (qWrong[q.id] ?? 0) > (qRight[q.id] ?? 0)).map((q) => q.id);
  });

  categoryAccuracy(category: CategoryId): { right: number; wrong: number } {
    const { qRight, qWrong } = this.state();
    let right = 0;
    let wrong = 0;
    for (const q of QUESTIONS) {
      if (q.category !== category) continue;
      right += qRight[q.id] ?? 0;
      wrong += qWrong[q.id] ?? 0;
    }
    return { right, wrong };
  }

  recordAnswer(questionId: string, correct: boolean): void {
    this.touch();
    this.state.update((s) => ({
      ...s,
      qRight: correct ? { ...s.qRight, [questionId]: (s.qRight[questionId] ?? 0) + 1 } : s.qRight,
      qWrong: correct ? s.qWrong : { ...s.qWrong, [questionId]: (s.qWrong[questionId] ?? 0) + 1 },
    }));
  }

  recordAttempt(attempt: QuizAttempt): void {
    this.state.update((s) => ({ ...s, attempts: [attempt, ...s.attempts].slice(0, 50) }));
  }

  /* -------------------------------------------------------------- streak */

  readonly streak = computed(() => this.state().streak);
  readonly bestStreak = computed(() => this.state().bestStreak);
  readonly studiedToday = computed(() => this.state().lastStudyDay === today());

  /** Called by every scoring action; advances the daily streak. */
  private touch(): void {
    const day = today();
    this.state.update((s) => {
      if (s.lastStudyDay === day) return s;
      const gap = s.lastStudyDay ? daysBetween(s.lastStudyDay, day) : 99;
      const streak = gap === 1 ? s.streak + 1 : 1;
      return { ...s, lastStudyDay: day, streak, bestStreak: Math.max(s.bestStreak, streak) };
    });
  }

  /* --------------------------------------------------------------- reset */

  /** Wipes study progress. Settings (theme, furigana) are kept. */
  reset(): void {
    this.state.set({ ...EMPTY });
  }
}

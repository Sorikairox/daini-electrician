import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressStore } from '../../core/progress.store';
import { CATEGORIES } from '../../data/categories.data';
import { QUESTIONS } from '../../data/questions.data';
import { CategoryId, Question } from '../../core/models';
import { pickQuestions } from '../../core/quiz.util';

@Component({
  selector: 'app-quiz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './quiz.html',
  styleUrl: './quiz.scss',
})
export class QuizComponent {
  protected readonly progress = inject(ProgressStore);
  protected readonly categories = CATEGORIES;
  protected readonly QUESTIONS = QUESTIONS;

  protected readonly category = signal<CategoryId | 'all'>('all');
  protected readonly length = signal(10);
  protected readonly weakOnly = signal(false);

  protected readonly questions = signal<Question[] | null>(null);
  protected readonly index = signal(0);
  protected readonly chosen = signal<number | null>(null);
  protected readonly answers = signal<(number | null)[]>([]);

  protected readonly current = computed<Question | null>(
    () => this.questions()?.[this.index()] ?? null,
  );
  protected readonly finished = computed(() => {
    const qs = this.questions();
    return qs !== null && this.index() >= qs.length;
  });
  protected readonly score = computed(() => {
    const qs = this.questions();
    if (!qs) return 0;
    return this.answers().reduce<number>((acc, a, i) => acc + (a === qs[i]?.answer ? 1 : 0), 0);
  });

  protected readonly available = computed(() => {
    const category = this.category();
    const weak = this.weakOnly() ? new Set(this.progress.weakQuestionIds()) : null;
    return QUESTIONS.filter(
      (q) => (category === 'all' || q.category === category) && (weak === null || weak.has(q.id)),
    ).length;
  });

  protected start(): void {
    const ids = this.weakOnly() ? this.progress.weakQuestionIds() : undefined;
    const picked = pickQuestions(this.category(), this.length(), ids);
    this.questions.set(picked);
    this.answers.set([]);
    this.index.set(0);
    this.chosen.set(null);
  }

  protected choose(option: number): void {
    if (this.chosen() !== null) return;
    const q = this.current();
    if (!q) return;
    this.chosen.set(option);
    this.answers.update((a) => [...a, option]);
    this.progress.recordAnswer(q.id, option === q.answer);
  }

  protected next(): void {
    const qs = this.questions();
    if (!qs) return;
    const nextIndex = this.index() + 1;
    this.chosen.set(null);
    this.index.set(nextIndex);
    if (nextIndex >= qs.length) {
      this.progress.recordAttempt({
        at: Date.now(),
        mode: 'practice',
        category: this.category(),
        correct: this.score(),
        total: qs.length,
      });
    }
  }

  protected restart(): void {
    this.questions.set(null);
    this.index.set(0);
    this.chosen.set(null);
    this.answers.set([]);
  }

  protected letter(i: number): string {
    return ['イ', 'ロ', 'ハ', 'ニ'][i] ?? String(i + 1);
  }
}

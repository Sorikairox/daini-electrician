import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressStore } from '../../core/progress.store';
import { CATEGORY_MAP } from '../../data/categories.data';
import { Question } from '../../core/models';
import { PASS_MARK, buildMockExam } from '../../core/quiz.util';

@Component({
  selector: 'app-mock-exam',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './mock-exam.html',
  styleUrl: './mock-exam.scss',
})
export class MockExamComponent implements OnDestroy {
  protected readonly progress = inject(ProgressStore);
  protected readonly passMark = PASS_MARK;

  protected readonly questions = signal<Question[] | null>(null);
  protected readonly answers = signal<Record<number, number>>({});
  protected readonly flags = signal<Set<number>>(new Set());
  protected readonly index = signal(0);
  protected readonly submitted = signal(false);
  protected readonly secondsLeft = signal(120 * 60);

  private timer: ReturnType<typeof setInterval> | null = null;

  protected readonly current = computed<Question | null>(
    () => this.questions()?.[this.index()] ?? null,
  );
  protected readonly answeredCount = computed(() => Object.keys(this.answers()).length);

  protected readonly score = computed(() => {
    const qs = this.questions();
    if (!qs) return 0;
    const a = this.answers();
    return qs.reduce((acc, q, i) => acc + (a[i] === q.answer ? 1 : 0), 0);
  });

  protected readonly byCategory = computed(() => {
    const qs = this.questions();
    if (!qs) return [];
    const a = this.answers();
    const map = new Map<string, { right: number; total: number }>();
    qs.forEach((q, i) => {
      const entry = map.get(q.category) ?? { right: 0, total: 0 };
      entry.total++;
      if (a[i] === q.answer) entry.right++;
      map.set(q.category, entry);
    });
    return [...map.entries()].map(([id, v]) => ({
      name: CATEGORY_MAP.get(id as never)?.en ?? id,
      jp: CATEGORY_MAP.get(id as never)?.jp ?? '',
      ...v,
    }));
  });

  protected readonly clock = computed(() => {
    const s = Math.max(0, this.secondsLeft());
    return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  });

  protected start(): void {
    this.questions.set(buildMockExam());
    this.answers.set({});
    this.flags.set(new Set());
    this.index.set(0);
    this.submitted.set(false);
    this.secondsLeft.set(120 * 60);
    this.stopTimer();
    this.timer = setInterval(() => {
      this.secondsLeft.update((s) => s - 1);
      if (this.secondsLeft() <= 0) this.submit();
    }, 1000);
  }

  protected choose(option: number): void {
    if (this.submitted()) return;
    this.answers.update((a) => ({ ...a, [this.index()]: option }));
  }

  protected toggleFlag(): void {
    this.flags.update((set) => {
      const next = new Set(set);
      if (next.has(this.index())) next.delete(this.index());
      else next.add(this.index());
      return next;
    });
  }

  protected goTo(i: number): void {
    this.index.set(i);
  }

  protected move(delta: number): void {
    const qs = this.questions();
    if (!qs) return;
    this.index.set(Math.min(qs.length - 1, Math.max(0, this.index() + delta)));
  }

  protected submit(): void {
    const qs = this.questions();
    if (!qs || this.submitted()) return;
    this.stopTimer();
    this.submitted.set(true);
    const a = this.answers();
    qs.forEach((q, i) => {
      if (a[i] !== undefined) this.progress.recordAnswer(q.id, a[i] === q.answer);
    });
    this.progress.recordAttempt({
      at: Date.now(),
      mode: 'mock',
      category: 'all',
      correct: this.score(),
      total: qs.length,
    });
  }

  protected quit(): void {
    this.stopTimer();
    this.questions.set(null);
    this.submitted.set(false);
  }

  protected letter(i: number): string {
    return ['イ', 'ロ', 'ハ', 'ニ'][i] ?? String(i + 1);
  }

  protected statusOf(i: number): string {
    if (this.submitted()) {
      const qs = this.questions();
      if (!qs) return '';
      return this.answers()[i] === qs[i].answer ? 'right' : 'wrong';
    }
    if (this.flags().has(i)) return 'flag';
    return this.answers()[i] !== undefined ? 'done' : '';
  }

  private stopTimer(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}

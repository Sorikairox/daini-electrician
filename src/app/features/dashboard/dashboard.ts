import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressStore } from '../../core/progress.store';
import { CATEGORIES } from '../../data/categories.data';
import { LESSONS } from '../../data/lessons.data';
import { GLOSSARY } from '../../data/glossary.data';
import { QUESTIONS } from '../../data/questions.data';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent {
  protected readonly progress = inject(ProgressStore);
  protected readonly categories = CATEGORIES;
  protected readonly totalLessons = LESSONS.length;
  protected readonly totalTerms = GLOSSARY.length;
  protected readonly totalQuestions = QUESTIONS.length;

  protected readonly lessonsPerCategory = computed(() => {
    const map = new Map<string, number>();
    for (const l of LESSONS) map.set(l.category, (map.get(l.category) ?? 0) + 1);
    return map;
  });

  protected readonly categoryStats = computed(() =>
    CATEGORIES.map((c) => {
      const total = this.lessonsPerCategory().get(c.id) ?? 0;
      const read = this.progress.lessonsReadIn(c.id);
      const { right, wrong } = this.progress.categoryAccuracy(c.id);
      return {
        category: c,
        total,
        read,
        pct: total === 0 ? 0 : read / total,
        accuracy: right + wrong === 0 ? null : right / (right + wrong),
      };
    }),
  );

  protected readonly recent = computed(() => this.progress.attempts().slice(0, 5));

  protected readonly nextUp = computed(() => {
    const read = this.progress.lessonsRead();
    return LESSONS.find((l) => !read.has(l.id)) ?? null;
  });

  protected date(ms: number): string {
    return new Date(ms).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  }
}

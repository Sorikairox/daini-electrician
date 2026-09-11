import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProgressStore } from '../../core/progress.store';
import { LESSONS } from '../../data/lessons.data';
import { CATEGORY_MAP } from '../../data/categories.data';
import { LessonBlocksComponent } from '../../shared/lesson-blocks';

@Component({
  selector: 'app-lesson-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, LessonBlocksComponent],
  template: `
    @if (lesson(); as l) {
      <nav class="crumbs small dim">
        <a routerLink="/lessons">Lessons</a> /
        <a [routerLink]="['/lessons']" [queryParams]="{ category: l.category }">{{
          category()?.en
        }}</a>
      </nav>

      <header class="page-head">
        <h1>{{ l.title }}</h1>
        <div class="jp sub">{{ l.titleJp }}</div>
        <div class="row small dim">
          <span class="tag">{{ l.minutes }} min</span>
          <span class="tag">{{ category()?.jp }}</span>
        </div>
      </header>

      <article class="card body">
        <app-lesson-blocks [blocks]="l.blocks" />
      </article>

      <div class="row foot">
        <button
          class="btn primary"
          type="button"
          (click)="progress.markRead(l.id, !progress.isRead(l.id))"
        >
          {{ progress.isRead(l.id) ? '✓ Marked as read' : 'Mark as read' }}
        </button>
        @if (prev(); as p) {
          <a class="btn" [routerLink]="['/lessons', p.id]">← {{ p.title }}</a>
        }
        @if (next(); as n) {
          <a class="btn" [routerLink]="['/lessons', n.id]">{{ n.title }} →</a>
        }
      </div>
    } @else {
      <p>Lesson not found. <a routerLink="/lessons">Back to the list</a></p>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .crumbs {
      margin-bottom: 0.7rem;
    }
    .page-head {
      margin-bottom: 1.2rem;
    }
    .sub {
      font-size: 1.05rem;
      color: var(--text-dim);
      margin-bottom: 0.5rem;
    }
    .body {
      padding: 1.4rem 1.5rem;
    }
    .foot {
      margin-top: 1.2rem;
    }
    @media (max-width: 600px) {
      .body {
        padding: 1rem;
      }
    }
  `,
})
export class LessonDetailComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly progress = inject(ProgressStore);

  private readonly params = toSignal(this.route.paramMap, { initialValue: null });

  protected readonly lesson = computed(() => {
    const id = this.params()?.get('id');
    return LESSONS.find((l) => l.id === id) ?? null;
  });

  protected readonly category = computed(() => {
    const l = this.lesson();
    return l ? (CATEGORY_MAP.get(l.category) ?? null) : null;
  });

  private readonly index = computed(() => LESSONS.findIndex((l) => l.id === this.lesson()?.id));
  protected readonly prev = computed(() => (this.index() > 0 ? LESSONS[this.index() - 1] : null));
  protected readonly next = computed(() =>
    this.index() >= 0 && this.index() < LESSONS.length - 1 ? LESSONS[this.index() + 1] : null,
  );
}

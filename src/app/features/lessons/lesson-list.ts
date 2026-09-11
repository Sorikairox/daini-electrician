import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProgressStore } from '../../core/progress.store';
import { LESSONS } from '../../data/lessons.data';
import { CATEGORIES, CATEGORY_MAP } from '../../data/categories.data';
import { CategoryId } from '../../core/models';

@Component({
  selector: 'app-lesson-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <header class="page-head">
      <h1>Lessons <span class="jp dim">学習</span></h1>
      <p class="dim">
        {{ LESSONS.length }} lessons covering the whole syllabus. Each one gives the English
        explanation first, then the Japanese wording you will meet on the paper.
      </p>
    </header>

    <div class="row filters">
      <button class="chip" [class.active]="active() === null" (click)="filter.set(null)">
        All ({{ LESSONS.length }})
      </button>
      @for (c of categories; track c.id) {
        <button class="chip" [class.active]="active() === c.id" (click)="filter.set(c.id)">
          {{ c.icon }} {{ c.en }}
        </button>
      }
    </div>

    @for (group of grouped(); track group.category.id) {
      <section>
        <h2>
          {{ group.category.en }}
          <span class="jp dim small">{{ group.category.jp }}</span>
          <span class="tag">{{ group.category.questionShare }}</span>
        </h2>
        <div class="list">
          @for (lesson of group.lessons; track lesson.id) {
            <a class="card item" [routerLink]="['/lessons', lesson.id]">
              <div class="item-main">
                <div class="row title-row">
                  @if (progress.isRead(lesson.id)) {
                    <span class="done" title="Read">✓</span>
                  }
                  <strong>{{ lesson.title }}</strong>
                </div>
                <div class="jp dim">{{ lesson.titleJp }}</div>
                <p class="small dim">{{ lesson.summary }}</p>
              </div>
              <span class="tag">{{ lesson.minutes }} min</span>
            </a>
          }
        </div>
      </section>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .page-head p {
      max-width: 62ch;
    }
    .filters {
      margin-bottom: 1.4rem;
    }
    section {
      margin-bottom: 1.8rem;
    }
    h2 {
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
      flex-wrap: wrap;
    }
    .list {
      display: grid;
      gap: 0.6rem;
    }
    .item {
      display: flex;
      gap: 0.8rem;
      align-items: flex-start;
      color: var(--text);
      justify-content: space-between;
    }
    .item:hover {
      text-decoration: none;
      border-color: var(--accent);
    }
    .item p {
      margin: 0.3rem 0 0;
    }
    .title-row {
      gap: 0.4rem;
    }
    .done {
      color: var(--good);
      font-weight: 700;
    }
  `,
})
export class LessonListComponent {
  protected readonly progress = inject(ProgressStore);
  private readonly route = inject(ActivatedRoute);
  protected readonly LESSONS = LESSONS;
  protected readonly categories = CATEGORIES;

  private readonly queryCategory = toSignal(this.route.queryParamMap, { initialValue: null });
  protected readonly filter = signal<CategoryId | null>(null);

  protected readonly active = computed<CategoryId | null>(() => {
    const explicit = this.filter();
    if (explicit !== null) return explicit;
    const fromUrl = this.queryCategory()?.get('category') as CategoryId | null | undefined;
    return fromUrl && CATEGORY_MAP.has(fromUrl) ? fromUrl : null;
  });

  protected readonly grouped = computed(() => {
    const active = this.active();
    return CATEGORIES.filter((c) => active === null || c.id === active)
      .map((category) => ({ category, lessons: LESSONS.filter((l) => l.category === category.id) }))
      .filter((g) => g.lessons.length > 0);
  });
}

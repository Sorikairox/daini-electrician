import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { SettingsStore } from '../../core/settings.store';
import { ProgressStore } from '../../core/progress.store';
import { GLOSSARY } from '../../data/glossary.data';
import { CATEGORIES, CATEGORY_MAP } from '../../data/categories.data';
import { normalise } from '../../core/search.service';
import { CategoryId } from '../../core/models';

@Component({
  selector: 'app-glossary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './glossary.html',
  styleUrl: './glossary.scss',
})
export class GlossaryComponent {
  private readonly route = inject(ActivatedRoute);
  protected readonly settings = inject(SettingsStore);

  /** The term the global search sent us to, so its row can be picked out. */
  protected readonly highlighted = toSignal(this.route.fragment, { initialValue: null });
  protected readonly progress = inject(ProgressStore);
  protected readonly categories = CATEGORIES;
  protected readonly total = GLOSSARY.length;

  protected readonly query = signal('');
  protected readonly category = signal<CategoryId | 'all'>('all');
  protected readonly hideEnglish = signal(false);
  protected readonly showExplanations = signal(true);

  protected readonly terms = computed(() => {
    const q = normalise(this.query().trim());
    const raw = this.query().trim();
    const c = this.category();
    return GLOSSARY.filter(
      (t) =>
        (c === 'all' || t.category === c) &&
        (q === '' ||
          t.jp.includes(raw) ||
          t.kana.includes(raw) ||
          normalise(t.romaji).includes(q) ||
          normalise(t.en).includes(q) ||
          normalise(t.note ?? '').includes(q)),
    );
  });

  protected readonly groups = computed(() => {
    const map = new Map<CategoryId, typeof GLOSSARY>();
    for (const t of this.terms()) {
      const list = map.get(t.category) ?? [];
      list.push(t);
      map.set(t.category, list);
    }
    return [...map.entries()].map(([id, terms]) => ({ category: CATEGORY_MAP.get(id)!, terms }));
  });

  protected box(jp: string): number {
    return this.progress.cardState(jp).box;
  }
}

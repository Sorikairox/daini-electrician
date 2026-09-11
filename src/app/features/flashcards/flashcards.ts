import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ProgressStore } from '../../core/progress.store';
import { SettingsStore } from '../../core/settings.store';
import { GLOSSARY } from '../../data/glossary.data';
import { CATEGORIES } from '../../data/categories.data';
import { CategoryId, Term } from '../../core/models';

type Direction = 'jp-en' | 'en-jp';

@Component({
  selector: 'app-flashcards',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './flashcards.html',
  styleUrl: './flashcards.scss',
})
export class FlashcardsComponent {
  protected readonly progress = inject(ProgressStore);
  protected readonly settings = inject(SettingsStore);
  protected readonly categories = CATEGORIES;
  protected readonly totalTerms = GLOSSARY.length;
  protected readonly intervals = ['again', '1 day', '3 days', '7 days', '21 days'];

  protected readonly category = signal<CategoryId | 'all'>('all');
  protected readonly direction = signal<Direction>('jp-en');
  protected readonly dueOnly = signal(true);
  protected readonly revealed = signal(false);
  protected readonly sessionDone = signal(0);
  private readonly reshuffle = signal(0);

  /** The deck is recomputed whenever the filters or the card states change. */
  protected readonly deck = computed<Term[]>(() => {
    this.reshuffle();
    const cards = this.progress.cards();
    const now = Date.now();
    const category = this.category();
    const pool = GLOSSARY.filter((t) => category === 'all' || t.category === category).filter(
      (t) => !this.dueOnly() || (cards[t.jp]?.due ?? 0) <= now,
    );
    // Weakest boxes first, then a stable shuffle so each session differs.
    return [...pool].sort((a, b) => {
      const ba = cards[a.jp]?.box ?? 1;
      const bb = cards[b.jp]?.box ?? 1;
      if (ba !== bb) return ba - bb;
      return this.hash(a.jp + this.reshuffle()) - this.hash(b.jp + this.reshuffle());
    });
  });

  protected readonly current = computed<Term | null>(() => this.deck()[0] ?? null);

  protected readonly boxCounts = computed(() => {
    const cards = this.progress.cards();
    const counts = [0, 0, 0, 0, 0];
    for (const t of GLOSSARY) counts[(cards[t.jp]?.box ?? 1) - 1]++;
    return counts;
  });

  protected grade(correct: boolean): void {
    const term = this.current();
    if (!term) return;
    this.progress.gradeCard(term.jp, correct);
    this.revealed.set(false);
    this.sessionDone.update((n) => n + 1);
  }

  protected skip(): void {
    this.revealed.set(false);
    this.reshuffle.update((n) => n + 1);
  }

  protected setCategory(value: CategoryId | 'all'): void {
    this.category.set(value);
    this.revealed.set(false);
  }

  private hash(value: string): number {
    let h = 0;
    for (let i = 0; i < value.length; i++) h = (h * 31 + value.charCodeAt(i)) | 0;
    return h;
  }
}

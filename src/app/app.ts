import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { ProgressStore } from './core/progress.store';
import { SettingsStore } from './core/settings.store';
import { SearchService } from './core/search.service';

interface NavItem {
  path: string;
  label: string;
  jp: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly searchService = inject(SearchService);
  protected readonly progress = inject(ProgressStore);
  protected readonly settings = inject(SettingsStore);

  protected readonly nav: NavItem[] = [
    { path: '/dashboard', label: 'Home', jp: 'ホーム', icon: '🏠' },
    { path: '/lessons', label: 'Lessons', jp: '学習', icon: '📘' },
    { path: '/flashcards', label: 'Flashcards', jp: '単語', icon: '🃏' },
    { path: '/quiz', label: 'Quiz', jp: '練習問題', icon: '❓' },
    { path: '/exam', label: 'Mock exam', jp: '模擬試験', icon: '⏱️' },
    { path: '/trainer', label: 'Diagrams', jp: '複線図', icon: '🔀' },
    { path: '/symbols', label: 'Symbols', jp: '図記号', icon: '▦' },
    { path: '/glossary', label: 'Glossary', jp: '用語集', icon: '📖' },
    { path: '/formulas', label: 'Formulas', jp: '公式', icon: '∑' },
    { path: '/practical', label: 'Practical', jp: '技能試験', icon: '✂️' },
    { path: '/settings', label: 'Settings', jp: '設定', icon: '⚙️' },
  ];

  protected readonly query = signal('');
  protected readonly results = computed(() => this.searchService.search(this.query()));
  protected readonly searchOpen = signal(false);

  protected readonly offline = signal(typeof navigator !== 'undefined' ? !navigator.onLine : false);

  constructor() {
    // Keep anchor jumps clear of the sticky top bar.
    inject(ViewportScroller).setOffset([0, 72]);

    if (typeof window !== 'undefined') {
      window.addEventListener('online', () => this.offline.set(false));
      window.addEventListener('offline', () => this.offline.set(true));
    }
  }

  protected onSearch(value: string): void {
    this.query.set(value);
    this.searchOpen.set(value.trim().length > 0);
  }

  protected go(link: (string | number)[], fragment?: string): void {
    this.searchOpen.set(false);
    this.query.set('');
    void this.router.navigate(link, fragment ? { fragment } : {});
  }

  protected cycleTheme(): void {
    const order = ['system', 'light', 'dark'] as const;
    const next = order[(order.indexOf(this.settings.theme()) + 1) % order.length];
    this.settings.set('theme', next);
  }
}

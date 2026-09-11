import { Injectable, computed, effect, signal } from '@angular/core';
import { load, save } from './storage';

export type Theme = 'system' | 'light' | 'dark';

interface SettingsState {
  theme: Theme;
  showKana: boolean;
  showRomaji: boolean;
  speech: boolean;
  largeJp: boolean;
}

const DEFAULTS: SettingsState = {
  theme: 'system',
  showKana: true,
  showRomaji: true,
  speech: true,
  largeJp: false,
};

@Injectable({ providedIn: 'root' })
export class SettingsStore {
  private readonly state = signal<SettingsState>({ ...DEFAULTS, ...load('settings', {}) });

  readonly theme = computed(() => this.state().theme);
  readonly showKana = computed(() => this.state().showKana);
  readonly showRomaji = computed(() => this.state().showRomaji);
  readonly speech = computed(() => this.state().speech);
  readonly largeJp = computed(() => this.state().largeJp);

  constructor() {
    effect(() => {
      const s = this.state();
      save('settings', s);
      const root = document.documentElement;
      root.dataset['theme'] = s.theme;
      root.classList.toggle('large-jp', s.largeJp);
    });
  }

  set<K extends keyof SettingsState>(key: K, value: SettingsState[K]): void {
    this.state.update((s) => ({ ...s, [key]: value }));
  }

  toggle(key: 'showKana' | 'showRomaji' | 'speech' | 'largeJp'): void {
    this.state.update((s) => ({ ...s, [key]: !s[key] }));
  }

  /** Speak a Japanese term with the browser's built-in voice (works offline). */
  speak(text: string): void {
    if (!this.speech() || typeof speechSynthesis === 'undefined') return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch {
      /* no voice available offline — silently ignore */
    }
  }
}

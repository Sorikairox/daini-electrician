import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ProgressStore } from '../../core/progress.store';
import { SettingsStore, Theme } from '../../core/settings.store';

@Component({
  selector: 'app-settings',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="page-head">
      <h1>Settings <span class="jp dim">設定</span></h1>
    </header>

    <section class="card stack">
      <h2>Display</h2>
      <div class="row">
        <span class="label">Theme</span>
        @for (t of themes; track t) {
          <button
            class="chip"
            [class.active]="settings.theme() === t"
            (click)="settings.set('theme', t)"
          >
            {{ t }}
          </button>
        }
      </div>
      <label class="row"
        ><input
          type="checkbox"
          [checked]="settings.showKana()"
          (change)="settings.toggle('showKana')"
        />
        <span>Show kana readings <span class="jp dim">ふりがな</span></span></label
      >
      <label class="row"
        ><input
          type="checkbox"
          [checked]="settings.showRomaji()"
          (change)="settings.toggle('showRomaji')"
        />
        <span>Show romaji</span></label
      >
      <label class="row"
        ><input
          type="checkbox"
          [checked]="settings.largeJp()"
          (change)="settings.toggle('largeJp')"
        />
        <span>Larger Japanese text</span></label
      >
      <label class="row"
        ><input
          type="checkbox"
          [checked]="settings.speech()"
          (change)="settings.toggle('speech')"
        />
        <span>Pronunciation button (uses the browser’s own Japanese voice)</span></label
      >
    </section>

    <section class="card stack">
      <h2>Your data</h2>
      <p class="dim small">
        Everything — lessons read, flashcard boxes, quiz history — is stored only in this browser.
        Nothing is uploaded anywhere, and the app keeps working with no connection.
      </p>
      <div class="row">
        <button class="btn" type="button" (click)="exportData()">Export progress (JSON)</button>
        <button class="btn danger" type="button" (click)="confirming.set(true)">
          Reset progress
        </button>
      </div>
      @if (confirming()) {
        <div class="confirm">
          <p>Delete all progress? Settings are kept. This cannot be undone.</p>
          <div class="row">
            <button class="btn danger" type="button" (click)="reset()">Yes, delete</button>
            <button class="btn" type="button" (click)="confirming.set(false)">Cancel</button>
          </div>
        </div>
      }
    </section>

    <section class="card stack">
      <h2>Install as an app</h2>
      <p class="dim small">
        This is a progressive web app. In Chrome or Edge use “Install app” from the address bar; on
        iOS Safari use Share → “Add to Home Screen”. After the first visit every lesson, question
        and symbol is cached, so it runs with no connection at all.
      </p>
    </section>

    <section class="card stack">
      <h2>About the content</h2>
      <p class="dim small">
        Written as study material for the 第二種電気工事士 exam. Rules, thresholds, fees and the
        official defect criteria are revised regularly — always confirm against the
        電気技術者試験センター (ECEE) publications and a current-year textbook before your sitting.
      </p>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    section {
      margin-bottom: 1rem;
    }
    .stack {
      gap: 0.7rem;
    }
    .label {
      min-width: 5rem;
      color: var(--text-dim);
      font-size: 0.9rem;
    }
    label.row {
      gap: 0.5rem;
      cursor: pointer;
    }
    label.row input {
      width: auto;
    }
    .btn.danger {
      border-color: var(--bad);
      color: var(--bad);
    }
    .confirm {
      border: 1px solid var(--bad);
      background: var(--bad-soft);
      border-radius: var(--radius-sm);
      padding: 0.7rem 0.9rem;
    }
    .confirm p {
      margin: 0 0 0.5rem;
    }
  `,
})
export class SettingsComponent {
  protected readonly settings = inject(SettingsStore);
  protected readonly progress = inject(ProgressStore);
  protected readonly themes: Theme[] = ['system', 'light', 'dark'];
  protected readonly confirming = signal(false);

  protected reset(): void {
    this.progress.reset();
    this.confirming.set(false);
  }

  protected exportData(): void {
    const blob = new Blob([JSON.stringify(localStorage.getItem('daini.progress') ?? '{}')], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'daini-progress.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}

import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SettingsStore } from '../core/settings.store';
import { Term } from '../core/models';

/**
 * Shows a Japanese exam term with its reading, romaji and English meaning,
 * plus a button that speaks it with the browser's offline voice.
 */
@Component({
  selector: 'app-jp-term',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="term">
      <div class="head">
        <span class="jp word">{{ term().jp }}</span>
        <button
          class="btn ghost sm speak"
          type="button"
          (click)="settings.speak(term().jp)"
          [attr.aria-label]="'Pronounce ' + term().jp"
        >
          🔊
        </button>
      </div>
      @if (settings.showKana()) {
        <div class="kana jp dim small">{{ term().kana }}</div>
      }
      @if (settings.showRomaji()) {
        <div class="romaji dim small">{{ term().romaji }}</div>
      }
      <div class="en">{{ term().en }}</div>
      @if (term().note) {
        <div class="note small dim">{{ term().note }}</div>
      }
    </div>
  `,
  styles: `
    .term {
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      background: var(--surface);
      padding: 0.7rem 0.8rem;
    }
    .head {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .word {
      font-size: calc(1.12rem * var(--jp-size));
      font-weight: 650;
      letter-spacing: 0.01em;
    }
    .speak {
      line-height: 1;
      padding: 0.15rem 0.35rem;
      opacity: 0.6;
    }
    .speak:hover {
      opacity: 1;
    }
    .kana {
      margin-top: 0.1rem;
    }
    .romaji {
      font-style: italic;
    }
    .en {
      margin-top: 0.35rem;
      font-weight: 550;
    }
    .note {
      margin-top: 0.25rem;
    }
  `,
})
export class JpTermComponent {
  readonly term = input.required<Term>();
  protected readonly settings = inject(SettingsStore);
}

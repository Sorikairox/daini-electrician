import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { SymbolDef } from '../core/models';
import { SettingsStore } from '../core/settings.store';

/** The definition panel that opens when a symbol in a calculation is tapped. */
@Component({
  selector: 'app-symbol-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card-inner" role="status">
      <div class="head">
        <span class="token">{{ symbol().token }}</span>
        <span class="means">{{ symbol().en }}</span>
      </div>
      @if (symbol().jp) {
        <div class="jp-row">
          <span class="jp term">{{ symbol().jp }}</span>
          @if (settings.showKana() && symbol().kana !== symbol().jp) {
            <span class="jp dim small">{{ symbol().kana }}</span>
          }
          @if (settings.showRomaji() && symbol().romaji) {
            <span class="dim small romaji">{{ symbol().romaji }}</span>
          }
          <button
            class="btn ghost sm"
            type="button"
            (click)="settings.speak(symbol().jp!)"
            [attr.aria-label]="'Pronounce ' + symbol().jp"
          >
            🔊
          </button>
        </div>
      }
      @if (symbol().unit) {
        <div class="small"><span class="label">Unit</span> {{ symbol().unit }}</div>
      }
      @if (symbol().note) {
        <div class="small dim jp note">{{ symbol().note }}</div>
      }
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
    .card-inner {
      border: 1px solid var(--accent);
      background: var(--accent-soft);
      border-radius: var(--radius-sm);
      padding: 0.6rem 0.75rem;
    }
    .head {
      display: flex;
      gap: 0.55rem;
      align-items: baseline;
      flex-wrap: wrap;
    }
    .token {
      font-family: 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--accent);
    }
    .means {
      font-weight: 600;
    }
    .jp-row {
      display: flex;
      gap: 0.45rem;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 0.25rem;
    }
    .term {
      font-weight: 650;
    }
    .romaji {
      font-style: italic;
    }
    .label {
      color: var(--text-dim);
      margin-right: 0.3rem;
    }
    .note {
      margin-top: 0.2rem;
    }
  `,
})
export class SymbolCardComponent {
  readonly symbol = input.required<SymbolDef>();
  protected readonly settings = inject(SettingsStore);
}

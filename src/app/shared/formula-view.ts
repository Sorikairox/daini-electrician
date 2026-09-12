import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { SymbolDef } from '../core/models';
import { annotate, usedSymbols } from '../core/notation';
import { SymbolCardComponent } from './symbol-card';

/**
 * A displayed calculation whose symbols can be tapped for their meaning.
 * Every symbol is also listed underneath, so nothing is hidden behind a tap.
 */
@Component({
  selector: 'app-formula',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SymbolCardComponent],
  template: `
    <div class="expr" [class.has-symbols]="legend().length > 0">
      @for (seg of segments(); track $index) {
        @if (seg.symbol) {
          <button
            type="button"
            class="sym"
            [class.active]="active()?.token === seg.symbol.token"
            [attr.aria-expanded]="active()?.token === seg.symbol.token"
            [attr.aria-label]="seg.symbol.token + ': ' + seg.symbol.en"
            [textContent]="seg.text"
            (click)="pick(seg.symbol)"
          ></button>
        } @else {
          <span [textContent]="seg.text"></span>
        }
      }
    </div>

    @if (active(); as sym) {
      <app-symbol-card [symbol]="sym" />
    }

    @if (caption()) {
      <div class="caption jp small dim">{{ caption() }}</div>
    }

    @if (legend().length > 0) {
      <div class="legend">
        <p class="small dim hint">Tap any symbol above, or pick one here:</p>
        <ul>
          @for (sym of shownLegend(); track sym.token) {
            <li>
              <button
                type="button"
                class="legend-row"
                [class.active]="active()?.token === sym.token"
                (click)="pick(sym)"
              >
                <span class="legend-token">{{ sym.token }}</span>
                <span class="legend-text">
                  {{ sym.en }}
                  @if (sym.unit) {
                    <span class="legend-unit dim">{{ sym.unit }}</span>
                  }
                </span>
              </button>
            </li>
          }
        </ul>
        @if (legend().length > COLLAPSE_AT) {
          <button type="button" class="btn ghost sm more" (click)="expanded.set(!expanded())">
            {{
              expanded() ? 'Show fewer' : '+ ' + (legend().length - COLLAPSE_AT) + ' more symbols'
            }}
          </button>
        }
      </div>
    }

    @if (where().length > 0) {
      <ul class="where small dim">
        @for (w of where(); track $index) {
          <li class="jp">{{ w }}</li>
        }
      </ul>
    }
  `,
  styles: `
    :host {
      display: block;
      min-width: 0;
    }
    .expr {
      font-family: 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      font-size: 1rem;
      line-height: 1.9;
      white-space: pre;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      padding-bottom: 0.15rem;
      margin-bottom: 0.5rem;
    }
    .sym {
      font: inherit;
      color: var(--accent);
      background: none;
      border: 0;
      border-bottom: 1px dashed currentColor;
      border-radius: 3px;
      padding: 0 0.05em;
      margin: 0;
      cursor: pointer;
      white-space: pre;
    }
    .sym:hover {
      background: var(--accent-soft);
    }
    .sym.active {
      background: var(--accent);
      color: var(--accent-text);
      border-bottom-style: solid;
    }
    .caption {
      margin-top: 0.5rem;
    }
    .legend {
      margin-top: 0.6rem;
    }
    .hint {
      margin: 0 0 0.25rem;
    }
    .legend ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      gap: 0.1rem;
    }
    .legend-row {
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
      flex-wrap: nowrap;
      width: 100%;
      text-align: left;
      font: inherit;
      font-size: 0.86rem;
      background: none;
      border: 0;
      border-radius: var(--radius-sm);
      padding: 0.2rem 0.35rem;
      cursor: pointer;
      color: inherit;
    }
    .legend-row:hover {
      background: var(--surface-2);
    }
    .legend-row.active {
      background: var(--accent-soft);
    }
    .legend-token {
      font-family: 'SFMono-Regular', ui-monospace, Menlo, Consolas, monospace;
      font-weight: 700;
      color: var(--accent);
      flex: 0 0 auto;
      min-width: 4.2em;
    }
    .legend-text {
      flex: 1 1 auto;
      min-width: 0;
    }
    .legend-unit {
      font-size: 0.94em;
      white-space: nowrap;
    }
    .more {
      margin-top: 0.2rem;
      color: var(--accent);
    }
    .where {
      margin: 0.55rem 0 0;
      padding-left: 1.1rem;
    }
  `,
})
export class FormulaViewComponent {
  readonly expression = input.required<string>();
  readonly symbols = input<SymbolDef[]>([]);
  readonly caption = input<string>('');
  readonly where = input<string[]>([]);

  /** Long lists are folded away so the definitions do not bury the lesson. */
  protected readonly COLLAPSE_AT = 6;
  protected readonly active = signal<SymbolDef | null>(null);
  protected readonly expanded = signal(false);
  protected readonly segments = computed(() => annotate(this.expression(), this.symbols()));
  protected readonly legend = computed(() => usedSymbols(this.expression(), this.symbols()));
  protected readonly shownLegend = computed(() =>
    this.expanded() ? this.legend() : this.legend().slice(0, this.COLLAPSE_AT),
  );

  protected pick(symbol: SymbolDef): void {
    this.active.update((current) => (current?.token === symbol.token ? null : symbol));
  }
}

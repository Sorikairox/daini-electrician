import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { SymbolDef } from '../core/models';
import { annotate, usedSymbols } from '../core/notation';
import { SymbolCardComponent } from './symbol-card';

/**
 * A worked calculation. Symbols and units in the question, the steps and the
 * answer are all tappable, and share one definition panel so the layout does
 * not jump around.
 */
@Component({
  selector: 'app-worked-example',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SymbolCardComponent],
  template: `
    <div class="q">
      <span class="tag">Example</span>
      @for (seg of questionSegments(); track $index) {
        @if (seg.symbol) {
          <button
            type="button"
            class="sym"
            [class.active]="active()?.token === seg.symbol.token"
            [attr.aria-label]="seg.symbol.token + ': ' + seg.symbol.en"
            [textContent]="seg.text"
            (click)="pick(seg.symbol)"
          ></button>
        } @else {
          <span class="jp" [textContent]="seg.text"></span>
        }
      }
    </div>

    <ol>
      @for (line of stepSegments(); track $index) {
        <li>
          @for (seg of line; track $index) {
            @if (seg.symbol) {
              <button
                type="button"
                class="sym"
                [class.active]="active()?.token === seg.symbol.token"
                [attr.aria-label]="seg.symbol.token + ': ' + seg.symbol.en"
                [textContent]="seg.text"
                (click)="pick(seg.symbol)"
              ></button>
            } @else {
              <span class="jp" [textContent]="seg.text"></span>
            }
          }
        </li>
      }
    </ol>

    <div class="a">
      <strong>Answer:</strong>
      @for (seg of answerSegments(); track $index) {
        @if (seg.symbol) {
          <button
            type="button"
            class="sym"
            [class.active]="active()?.token === seg.symbol.token"
            [attr.aria-label]="seg.symbol.token + ': ' + seg.symbol.en"
            [textContent]="seg.text"
            (click)="pick(seg.symbol)"
          ></button>
        } @else {
          <span class="jp" [textContent]="seg.text"></span>
        }
      }
    </div>

    @if (active(); as sym) {
      <app-symbol-card [symbol]="sym" />
    } @else if (legend().length > 0) {
      <p class="small dim hint">Tap any highlighted symbol for what it means.</p>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .q {
      margin-bottom: 0.5rem;
    }
    ol {
      margin: 0 0 0.5rem;
      padding-left: 1.3rem;
    }
    li {
      margin-bottom: 0.3rem;
    }
    .a {
      color: var(--good);
      margin-bottom: 0.5rem;
    }
    .a strong {
      margin-right: 0.25rem;
    }
    .sym {
      font: inherit;
      color: var(--accent);
      background: none;
      border: 0;
      border-bottom: 1px dashed currentColor;
      border-radius: 3px;
      padding: 0 0.05em;
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
    .hint {
      margin: 0;
    }
  `,
})
export class WorkedExampleComponent {
  readonly question = input.required<string>();
  readonly steps = input.required<string[]>();
  readonly answer = input.required<string>();
  readonly symbols = input<SymbolDef[]>([]);

  protected readonly active = signal<SymbolDef | null>(null);

  protected readonly questionSegments = computed(() => annotate(this.question(), this.symbols()));
  protected readonly stepSegments = computed(() =>
    this.steps().map((step) => annotate(step, this.symbols())),
  );
  protected readonly answerSegments = computed(() => annotate(this.answer(), this.symbols()));
  protected readonly legend = computed(() =>
    usedSymbols([this.question(), ...this.steps(), this.answer()].join(' '), this.symbols()),
  );

  protected pick(symbol: SymbolDef): void {
    this.active.update((current) => (current?.token === symbol.token ? null : symbol));
  }
}

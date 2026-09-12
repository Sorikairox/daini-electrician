import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Block, Term } from '../core/models';
import { JpTermComponent } from './jp-term';
import { FormulaViewComponent } from './formula-view';
import { WorkedExampleComponent } from './worked-example';
import { VocabTextComponent } from './vocab-text';

/** Renders the structured content blocks of a lesson. */
@Component({
  selector: 'app-lesson-blocks',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JpTermComponent, FormulaViewComponent, WorkedExampleComponent, VocabTextComponent],
  template: `
    @for (block of blocks(); track $index; let blockIndex = $index) {
      @switch (block.kind) {
        @case ('p') {
          <p>
            <app-vocab-text
              [text]="block.text"
              [active]="activeJp()"
              (pick)="onPick($event, blockIndex)"
            />
          </p>
        }
        @case ('h') {
          <h3 class="block-h">
            <app-vocab-text
              [text]="block.text"
              [active]="activeJp()"
              (pick)="onPick($event, blockIndex)"
            />
            @if (block.jp) {
              <span class="jp dim">{{ block.jp }}</span>
            }
          </h3>
        }
        @case ('list') {
          @if (block.ordered) {
            <ol>
              @for (item of block.items; track $index) {
                <li class="jp">
                  <app-vocab-text
                    [text]="item"
                    [active]="activeJp()"
                    (pick)="onPick($event, blockIndex)"
                  />
                </li>
              }
            </ol>
          } @else {
            <ul>
              @for (item of block.items; track $index) {
                <li class="jp">
                  <app-vocab-text
                    [text]="item"
                    [active]="activeJp()"
                    (pick)="onPick($event, blockIndex)"
                  />
                </li>
              }
            </ul>
          }
        }
        @case ('terms') {
          <div class="terms">
            @for (t of block.terms; track t.jp) {
              <app-jp-term [term]="t" />
            }
          </div>
        }
        @case ('formula') {
          <figure class="formula">
            <app-formula
              [expression]="block.latexish"
              [symbols]="block.symbols ?? []"
              [caption]="block.caption"
              [where]="block.where ?? []"
            />
          </figure>
        }
        @case ('table') {
          <div class="table-scroll">
            <table class="data">
              <thead>
                <tr>
                  @for (h of block.head; track $index) {
                    <th class="jp">
                      <app-vocab-text
                        [text]="h"
                        [active]="activeJp()"
                        (pick)="onPick($event, blockIndex)"
                      />
                    </th>
                  }
                </tr>
              </thead>
              <tbody>
                @for (row of block.rows; track $index) {
                  <tr>
                    @for (cell of row; track $index) {
                      <td class="jp">
                        <app-vocab-text
                          [text]="cell"
                          [active]="activeJp()"
                          (pick)="onPick($event, blockIndex)"
                        />
                      </td>
                    }
                  </tr>
                }
              </tbody>
            </table>
          </div>
          @if (block.caption) {
            <p class="small dim jp">
              <app-vocab-text
                [text]="block.caption"
                [active]="activeJp()"
                (pick)="onPick($event, blockIndex)"
              />
            </p>
          }
        }
        @case ('callout') {
          <aside class="callout" [class]="block.tone">
            <strong class="jp">{{ icon(block.tone) }} {{ block.title }}</strong>
            <div class="jp">
              <app-vocab-text
                [text]="block.text"
                [active]="activeJp()"
                (pick)="onPick($event, blockIndex)"
              />
            </div>
          </aside>
        }
        @case ('example') {
          <div class="example">
            <app-worked-example
              [question]="block.question"
              [steps]="block.steps"
              [answer]="block.answer"
              [symbols]="block.symbols ?? []"
            />
          </div>
        }
      }

      @if (definitionFor(blockIndex); as term) {
        <div class="definition">
          <app-jp-term [term]="term" />
          <button class="btn ghost sm close" type="button" (click)="active.set(null)">
            Close ✕
          </button>
        </div>
      }
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .block-h {
      margin-top: 1.6rem;
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
      flex-wrap: wrap;
    }
    .block-h .jp {
      font-size: 0.9rem;
      font-weight: 500;
    }
    ul,
    ol {
      margin: 0 0 1em;
      padding-left: 1.3rem;
    }
    li {
      margin-bottom: 0.35rem;
    }
    .terms {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 0.6rem;
      margin-bottom: 1.2rem;
    }
    .formula {
      margin: 0 0 1.2rem;
      min-width: 0;
      background: var(--surface-2);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      padding: 0.8rem 1rem;
    }
    .callout {
      border-left: 4px solid var(--accent);
      background: var(--accent-soft);
      border-radius: var(--radius-sm);
      padding: 0.75rem 0.9rem;
      margin: 0 0 1.2rem;
    }
    .callout strong {
      display: block;
      margin-bottom: 0.25rem;
    }
    .callout.warn {
      border-left-color: var(--bad);
      background: var(--bad-soft);
    }
    .callout.tip {
      border-left-color: var(--good);
      background: var(--good-soft);
    }
    .callout.exam {
      border-left-color: var(--warn);
      background: var(--warn-soft);
    }
    .definition {
      position: relative;
      margin: 0.2rem 0 1.2rem;
    }
    .definition app-jp-term ::ng-deep .term {
      border-color: var(--accent);
      background: var(--accent-soft);
      padding-right: 5.5rem;
    }
    .definition .close {
      position: absolute;
      top: 0.4rem;
      right: 0.5rem;
      color: var(--accent);
    }
    .example {
      border: 1px dashed var(--border);
      border-radius: var(--radius-sm);
      padding: 0.8rem 1rem;
      margin: 0 0 1.2rem;
    }
  `,
})
export class LessonBlocksComponent {
  readonly blocks = input.required<Block[]>();

  /**
   * The open definition, and which block it was opened from — so the panel
   * appears next to the word the reader tapped rather than at the end of the
   * lesson. One panel at a time keeps the page from jumping about.
   */
  protected readonly active = signal<{ term: Term; block: number } | null>(null);
  protected readonly activeJp = computed(() => this.active()?.term.jp ?? null);

  protected onPick(term: Term, block: number): void {
    this.active.update((current) =>
      current?.term.jp === term.jp && current.block === block ? null : { term, block },
    );
  }

  protected definitionFor(block: number): Term | null {
    const current = this.active();
    return current && current.block === block ? current.term : null;
  }

  protected icon(tone: 'tip' | 'warn' | 'exam'): string {
    return tone === 'warn' ? '⚠️' : tone === 'tip' ? '💡' : '🎯';
  }
}

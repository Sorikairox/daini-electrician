import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { Term } from '../core/models';
import { annotateProse } from '../core/vocab';

/**
 * A run of prose with its glossary terms marked up. Clicking one asks the
 * parent to show the definition; this component holds no state of its own, so
 * every piece of text in a lesson can share one definition panel.
 */
@Component({
  selector: 'app-vocab-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `@for (seg of segments(); track $index) {
    @if (seg.term) {
      <button
        type="button"
        class="vocab"
        [class.active]="active() === seg.term.jp"
        [attr.aria-label]="seg.text + ': ' + seg.term.en"
        [textContent]="seg.text"
        (click)="pick.emit(seg.term)"
      ></button>
    } @else {
      <span [textContent]="seg.text"></span>
    }
  }`,
  styles: `
    :host {
      display: inline;
    }
    .vocab {
      font: inherit;
      color: inherit;
      background: none;
      border: 0;
      border-bottom: 1px dotted var(--text-dim);
      border-radius: 2px;
      padding: 0;
      margin: 0;
      cursor: help;
      text-align: left;
    }
    .vocab:hover {
      color: var(--accent);
      border-bottom-color: var(--accent);
      background: var(--accent-soft);
    }
    .vocab.active {
      color: var(--accent);
      border-bottom: 1px solid var(--accent);
      background: var(--accent-soft);
      font-weight: 600;
    }
  `,
})
export class VocabTextComponent {
  readonly text = input.required<string>();
  /** jp of the term whose definition is currently open. */
  readonly active = input<string | null>(null);
  readonly pick = output<Term>();

  protected readonly segments = computed(() => annotateProse(this.text()));
}

import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { Term } from '../core/models';
import { VocabTextComponent } from './vocab-text';
import { JpTermComponent } from './jp-term';

/**
 * A self-contained run of prose: its glossary terms are tappable and the
 * definition opens directly underneath. Use it wherever a single passage needs
 * the treatment; lessons share one panel across many blocks instead.
 */
@Component({
  selector: 'app-vocab-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [VocabTextComponent, JpTermComponent],
  template: `
    <app-vocab-text [text]="text()" [active]="activeJp()" (pick)="pick($event)" />
    @if (active(); as term) {
      <div class="definition">
        <app-jp-term [term]="term" />
        <button class="btn ghost sm close" type="button" (click)="active.set(null)">Close ✕</button>
      </div>
    }
  `,
  styles: `
    :host {
      display: block;
    }
    .definition {
      position: relative;
      margin: 0.5rem 0 0.3rem;
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
  `,
})
export class VocabBlockComponent {
  readonly text = input.required<string>();

  protected readonly active = signal<Term | null>(null);
  protected readonly activeJp = computed(() => this.active()?.jp ?? null);

  protected pick(term: Term): void {
    this.active.update((current) => (current?.jp === term.jp ? null : term));
  }
}

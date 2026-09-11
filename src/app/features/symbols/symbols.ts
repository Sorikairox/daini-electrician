import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SettingsStore } from '../../core/settings.store';
import { SYMBOLS, SYMBOL_GROUPS } from '../../data/symbols.data';
import { normalise } from '../../core/search.service';
import { DiagramSymbol } from '../../core/models';

interface RenderedSymbol extends DiagramSymbol {
  safeSvg: SafeHtml;
}

@Component({
  selector: 'app-symbols',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './symbols.html',
  styleUrl: './symbols.scss',
})
export class SymbolsComponent {
  private readonly sanitizer = inject(DomSanitizer);
  protected readonly settings = inject(SettingsStore);
  protected readonly groups = SYMBOL_GROUPS;

  protected readonly group = signal<DiagramSymbol['group'] | 'all'>('all');
  protected readonly query = signal('');
  protected readonly quizMode = signal(false);
  protected readonly revealed = signal<Set<string>>(new Set());

  private readonly rendered: RenderedSymbol[] = SYMBOLS.map((s) => ({
    ...s,
    safeSvg: this.sanitizer.bypassSecurityTrustHtml(
      `<svg viewBox="0 0 100 100" role="img" aria-label="${s.en}">${s.svg}</svg>`,
    ),
  }));

  protected readonly visible = computed(() => {
    const g = this.group();
    const q = normalise(this.query().trim());
    return this.rendered.filter(
      (s) =>
        (g === 'all' || s.group === g) &&
        (q === '' ||
          normalise(s.en).includes(q) ||
          normalise(s.romaji).includes(q) ||
          s.jp.includes(this.query().trim()) ||
          s.kana.includes(this.query().trim())),
    );
  });

  protected reveal(id: string): void {
    this.revealed.update((set) => new Set(set).add(id));
  }

  protected toggleQuiz(): void {
    this.quizMode.update((v) => !v);
    this.revealed.set(new Set());
  }

  protected isHidden(id: string): boolean {
    return this.quizMode() && !this.revealed().has(id);
  }
}

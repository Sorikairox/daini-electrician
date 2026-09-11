import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SettingsStore } from '../../core/settings.store';
import { CANDIDATE_ARCHETYPES, DEFECTS, FUKUSENZU_STEPS, TOOLS } from '../../data/practical.data';

type Tab = 'method' | 'problems' | 'tools' | 'defects';

@Component({
  selector: 'app-practical',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './practical.html',
  styleUrl: './practical.scss',
})
export class PracticalComponent {
  protected readonly settings = inject(SettingsStore);
  protected readonly tab = signal<Tab>('method');
  protected readonly steps = FUKUSENZU_STEPS;
  protected readonly problems = CANDIDATE_ARCHETYPES;
  protected readonly tools = TOOLS;
  protected readonly defects = DEFECTS;
  protected readonly open = signal<number | null>(null);

  protected readonly tabs: { id: Tab; label: string; jp: string }[] = [
    { id: 'method', label: 'Wiring method', jp: '複線図' },
    { id: 'problems', label: '13 candidate tasks', jp: '候補問題' },
    { id: 'tools', label: 'Tools', jp: '工具' },
    { id: 'defects', label: 'Defects', jp: '欠陥' },
  ];

  protected toggle(no: number): void {
    this.open.update((v) => (v === no ? null : no));
  }
}

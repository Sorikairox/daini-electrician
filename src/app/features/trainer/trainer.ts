import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CIRCUITS, Circuit, CircuitEdge, CircuitNode, STEP_LABELS } from '../../data/circuits.data';

interface DrawnEdge {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  colour: string;
  step: number;
  note: string;
  key: string;
}

const COLOURS: Record<string, string> = {
  white: '#f4f4ef',
  black: '#23262b',
  red: '#d6392c',
};

@Component({
  selector: 'app-trainer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './trainer.html',
  styleUrl: './trainer.scss',
})
export class TrainerComponent {
  protected readonly circuits = CIRCUITS;
  protected readonly stepLabels = STEP_LABELS;

  protected readonly circuitId = signal(CIRCUITS[0].id);
  protected readonly step = signal(1);
  protected readonly showAnswers = signal(false);

  protected readonly circuit = computed<Circuit>(
    () => CIRCUITS.find((c) => c.id === this.circuitId()) ?? CIRCUITS[0],
  );

  /** Lays every conductor out with a perpendicular offset so parallel runs stay readable. */
  protected readonly edges = computed<DrawnEdge[]>(() => {
    const circuit = this.circuit();
    const byId = new Map(circuit.nodes.map((n) => [n.id, n]));
    const lanes = new Map<string, CircuitEdge[]>();

    for (const edge of circuit.edges) {
      const key = [edge.from, edge.to].sort().join('|');
      lanes.set(key, [...(lanes.get(key) ?? []), edge]);
    }

    const drawn: DrawnEdge[] = [];
    for (const [key, group] of lanes) {
      group.forEach((edge, i) => {
        const a = byId.get(edge.from) as CircuitNode;
        const b = byId.get(edge.to) as CircuitNode;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const len = Math.hypot(dx, dy) || 1;
        const spread = 9;
        const offset = (i - (group.length - 1) / 2) * spread;
        const ox = (-dy / len) * offset;
        const oy = (dx / len) * offset;
        drawn.push({
          x1: a.x + ox,
          y1: a.y + oy,
          x2: b.x + ox,
          y2: b.y + oy,
          colour: COLOURS[edge.colour],
          step: edge.step,
          note: edge.note,
          key: `${key}-${i}`,
        });
      });
    }
    return drawn;
  });

  protected readonly visibleEdges = computed(() =>
    this.edges().filter((e) => e.step <= this.step()),
  );

  protected readonly legend = computed(() =>
    this.circuit().edges.filter((e) => e.step === this.step()),
  );

  protected select(id: string): void {
    this.circuitId.set(id);
    this.step.set(1);
    this.showAnswers.set(false);
  }

  protected setStep(step: number): void {
    this.step.set(step);
  }

  protected nodeGlyph(kind: CircuitNode['kind']): string {
    switch (kind) {
      case 'source':
        return '⚡';
      case 'box':
        return '⊕';
      case 'rose':
        return '◎';
      case 'lamp':
        return '○';
      case 'switch':
        return '●';
      case 'outlet':
        return '⊂';
      case 'frame':
        return '▤';
    }
  }
}

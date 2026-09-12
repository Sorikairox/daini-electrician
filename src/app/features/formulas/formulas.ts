import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormulaViewComponent } from '../../shared/formula-view';
import { FORMULAS } from '../../data/formulas.data';
import { CATEGORY_MAP } from '../../data/categories.data';

@Component({
  selector: 'app-formulas',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormulaViewComponent],
  template: `
    <header class="page-head">
      <h1>Formula sheet <span class="jp dim">公式集</span></h1>
      <p class="dim">
        Every calculation on the written paper comes from this page. Print it, or open it on your
        phone on the train — it works with no connection.
      </p>
    </header>

    <div class="grid">
      @for (f of formulas; track f.id) {
        <div class="card formula">
          <div class="row head">
            <strong>{{ f.title }}</strong>
            <span class="tag">{{ label(f.category) }}</span>
          </div>
          <div class="jp dim small titleJp">{{ f.titleJp }}</div>
          <app-formula [expression]="f.expression" [symbols]="f.symbols ?? []" [where]="f.where" />
          <p class="small note jp">{{ f.note }}</p>
        </div>
      }
    </div>

    <section class="numbers">
      <h2>Numbers worth memorising <span class="jp dim">暗記すべき数値</span></h2>
      <div class="table-scroll card">
        <table class="data">
          <thead>
            <tr>
              <th>Item</th>
              <th>日本語</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            @for (row of keyNumbers; track row[0]) {
              <tr>
                <td>{{ row[0] }}</td>
                <td class="jp">{{ row[1] }}</td>
                <td class="jp">
                  <strong>{{ row[2] }}</strong>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
    .page-head p {
      max-width: 62ch;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 0.8rem;
    }
    .formula {
      display: grid;
      gap: 0.2rem;
      align-content: start;
      min-width: 0;
    }
    .head {
      justify-content: space-between;
      align-items: baseline;
    }
    .titleJp {
      margin-bottom: 0.5rem;
    }
    app-formula {
      background: var(--surface-2);
      border-radius: var(--radius-sm);
      padding: 0.7rem 0.8rem;
    }
    .note {
      margin: 0.6rem 0 0;
    }
    .numbers {
      margin-top: 2rem;
    }
    .numbers h2 {
      display: flex;
      gap: 0.5rem;
      align-items: baseline;
    }
  `,
})
export class FormulasComponent {
  protected readonly formulas = FORMULAS;

  protected readonly keyNumbers: [string, string, string][] = [
    ['Ampacity 1.6 / 2.0 / 2.6 mm', '許容電流', '27 A / 35 A / 48 A'],
    ['Reduction factor 3 / 4 / 5–6 / 7–15 wires', '電流減少係数', '0.70 / 0.63 / 0.56 / 0.49'],
    ['Branch circuit 20 A MCB, min conductor', '分岐回路の電線太さ', '1.6 mm'],
    ['Branch breaker position', '分岐点からの距離', '3 m → 8 m (35 %) → unlimited (55 %)'],
    ['Insulation resistance ≤150 V / ≤300 V / >300 V to earth', '絶縁抵抗', '0.1 / 0.2 / 0.4 MΩ'],
    ['Leakage current limit', '漏えい電流', '1 mA'],
    ['Class-D earth resistance', 'D種接地抵抗', '100 Ω (500 Ω with 0.5 s RCD)'],
    ['Class-D earth conductor', '接地線の太さ', '1.6 mm or thicker'],
    ['Cable support spacing', '支持点間距離', '2 m (plastic conduit 1.5 m)'],
    ['Conduit bend radius', '曲げ半径', '≥ 6 × inside diameter'],
    ['Household RCD sensitivity', '定格感度電流', '30 mA, 0.1 s'],
    ['Written exam pass mark', '合格基準', 'about 30 / 50'],
    ['Practical exam time', '技能試験の時間', '40 minutes, 0 defects allowed'],
  ];

  protected label(id: string): string {
    return CATEGORY_MAP.get(id as never)?.en ?? id;
  }
}

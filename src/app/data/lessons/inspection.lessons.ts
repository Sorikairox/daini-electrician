import { Lesson } from '../../core/models';

export const INSPECTION_LESSONS: Lesson[] = [
  {
    id: 'commissioning',
    category: 'inspection',
    title: 'Commissioning inspection',
    titleJp: '竣工検査の手順',
    minutes: 9,
    summary: 'The fixed order of tests, and the insulation-resistance numbers you must know.',
    blocks: [
      { kind: 'h', text: 'The order never changes', jp: '検査の順序' },
      {
        kind: 'list',
        ordered: true,
        items: [
          '目視点検 — visual inspection.',
          '絶縁抵抗測定 — insulation resistance (power off).',
          '接地抵抗測定 — earth resistance.',
          '導通試験 — continuity / correct connections.',
          'Then energise and check 漏れ電流 (leakage current) and operation.',
        ],
      },
      {
        kind: 'table',
        head: ['Circuit voltage 電路の使用電圧', 'Minimum insulation resistance'],
        rows: [
          ['300 V or less, voltage to earth 150 V or less', '0.1 MΩ'],
          ['300 V or less, voltage to earth over 150 V', '0.2 MΩ'],
          ['Over 300 V', '0.4 MΩ'],
        ],
        caption:
          'A 100 V house circuit needs 0.1 MΩ; a 200 V circuit (voltage to earth 100 V on 1φ3W) still needs only 0.1 MΩ.',
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'When you cannot switch the load off',
        text: 'If measuring insulation resistance is impractical on a live installation, the leakage current must not exceed 1 mA (漏えい電流1mA以下). Measure it with a clamp meter.',
      },
      { kind: 'h', text: 'Earth resistance measurement', jp: '接地抵抗の測定' },
      {
        kind: 'list',
        items: [
          'Uses an earth tester (接地抵抗計 / アーステスタ) with three electrodes E – P – C in a straight line, roughly 10 m apart.',
          'E is the electrode under test; P is the potential probe; C is the current probe.',
          'Class-D limit is 100 Ω, or 500 Ω where an RCD trips within 0.5 s.',
        ],
      },
    ],
  },
  {
    id: 'instruments',
    category: 'inspection',
    title: 'Measuring instruments',
    titleJp: '測定器の種類と使い方',
    minutes: 8,
    summary: 'Which meter for which job, and how it is connected.',
    blocks: [
      {
        kind: 'table',
        head: ['Instrument', 'Japanese', 'Connection / use'],
        rows: [
          ['Voltmeter', '電圧計', 'Connected in parallel (並列) with the load.'],
          ['Ammeter', '電流計', 'Connected in series (直列) with the load.'],
          ['Wattmeter', '電力計', 'Voltage coil in parallel, current coil in series.'],
          ['Multimeter', '回路計（テスタ）', 'Voltage, current, resistance, continuity.'],
          ['Insulation tester', '絶縁抵抗計（メガー）', 'DC test voltage; circuit must be dead.'],
          ['Earth tester', '接地抵抗計', 'Three-electrode method.'],
          ['Clamp meter', 'クランプメータ', 'Current or leakage without breaking the circuit.'],
          ['Voltage detector', '検電器', 'Confirms a conductor is live before you touch it.'],
          ['Phase tester', '検相器', 'Checks the phase sequence of a 3-phase supply.'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Leakage current with a clamp meter',
        text: 'Clamp ALL conductors of the circuit at once. The vector sum is zero unless current is leaking to earth — that residual is what you read.',
      },
      {
        kind: 'list',
        items: [
          '可動コイル形 (moving coil) responds to DC average; 可動鉄片形 (moving iron) is used for AC.',
          'An insulation tester applies 500 V DC for a 300 V-and-below circuit; disconnect electronic equipment first.',
          'A contractor’s registered office must keep 絶縁抵抗計, 接地抵抗計 and 回路計 available (電気工事業法).',
        ],
      },
    ],
  },
];

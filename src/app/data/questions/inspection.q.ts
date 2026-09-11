import { Question } from '../../core/models';

export const INSPECTION_QUESTIONS: Question[] = [
  {
    id: 'is-1',
    category: 'inspection',
    difficulty: 2,
    q: 'What is the correct order of a commissioning inspection?',
    qJp: '竣工検査の順序として正しいものは。',
    options: [
      '絶縁抵抗測定 → 目視点検 → 接地抵抗測定 → 導通試験',
      '目視点検 → 絶縁抵抗測定 → 接地抵抗測定 → 導通試験',
      '導通試験 → 目視点検 → 絶縁抵抗測定 → 接地抵抗測定',
      '接地抵抗測定 → 導通試験 → 目視点検 → 絶縁抵抗測定',
    ],
    answer: 1,
    explain:
      'Always look first (目視点検), then measure with the power off, then prove continuity, and only then energise.',
  },
  {
    id: 'is-2',
    category: 'inspection',
    difficulty: 2,
    q: 'A 100 V house circuit (voltage to earth 100 V) needs an insulation resistance of at least:',
    options: ['0.1 MΩ', '0.2 MΩ', '0.4 MΩ', '1 MΩ'],
    answer: 0,
    explain:
      '≤ 300 V with voltage to earth ≤ 150 V → 0.1 MΩ. Over 150 V to earth → 0.2 MΩ. Over 300 V → 0.4 MΩ.',
  },
  {
    id: 'is-3',
    category: 'inspection',
    difficulty: 2,
    q: 'A circuit at 400 V requires an insulation resistance of at least:',
    options: ['0.1 MΩ', '0.2 MΩ', '0.4 MΩ', '0.6 MΩ'],
    answer: 2,
    explain: 'Over 300 V → 0.4 MΩ.',
  },
  {
    id: 'is-4',
    category: 'inspection',
    difficulty: 2,
    q: 'When insulation resistance cannot be measured on a live installation, the leakage current must not exceed:',
    options: ['0.1 mA', '1 mA', '10 mA', '30 mA'],
    answer: 1,
    explain:
      '漏えい電流1mA以下. Measure it with a clamp meter around all the circuit conductors together.',
  },
  {
    id: 'is-5',
    category: 'inspection',
    difficulty: 1,
    q: 'An ammeter is connected to the circuit:',
    options: [
      'In parallel with the load',
      'In series with the load',
      'Between line and earth',
      'Across the supply',
    ],
    answer: 1,
    explain: '電流計は直列, 電圧計は並列. A clamp meter avoids breaking the circuit at all.',
  },
  {
    id: 'is-6',
    category: 'inspection',
    difficulty: 2,
    q: 'Which instrument measures earth resistance?',
    options: ['メガー（絶縁抵抗計）', '接地抵抗計', '検電器', '検相器'],
    answer: 1,
    explain:
      'The earth tester (接地抵抗計 / アーステスタ) uses three electrodes E–P–C placed in a line about 10 m apart.',
  },
  {
    id: 'is-7',
    category: 'inspection',
    difficulty: 2,
    q: 'What does a 検相器 check?',
    options: [
      'Insulation resistance',
      'Phase sequence of a three-phase supply',
      'Leakage current',
      'Earth continuity',
    ],
    answer: 1,
    explain:
      'A phase-rotation tester tells you whether the motor will turn the right way before you connect it.',
  },
  {
    id: 'is-8',
    category: 'inspection',
    difficulty: 2,
    q: 'Which instrument can measure current without disconnecting the circuit?',
    options: ['回路計', 'クランプメータ', '絶縁抵抗計', '電力計'],
    answer: 1,
    explain:
      'The clamp meter reads the magnetic field around the conductor. Clamping all conductors at once reveals leakage current.',
  },
  {
    id: 'is-9',
    category: 'inspection',
    difficulty: 3,
    q: 'Class-D earthing may be 500 Ω instead of 100 Ω when:',
    options: [
      'The equipment is double insulated',
      'An RCD disconnects the circuit within 0.5 s of an earth fault',
      'The location is dry',
      'The voltage is below 150 V',
    ],
    answer: 1,
    explain: 'The 0.5-second rule applies to both class C and class D.',
  },
  {
    id: 'is-10',
    category: 'inspection',
    difficulty: 2,
    q: 'Before measuring insulation resistance you must:',
    options: [
      'Energise the circuit',
      'Switch the supply off and disconnect sensitive electronics',
      'Short the conductors together',
      'Remove the earth connection',
    ],
    answer: 1,
    explain:
      'The megger applies a DC test voltage (500 V for circuits up to 300 V), which can damage electronic equipment left connected.',
  },
  {
    id: 'is-11',
    category: 'inspection',
    difficulty: 2,
    q: 'Which instruments must a registered electrical contractor keep at each business office?',
    options: [
      '検電器・検相器・回路計',
      '絶縁抵抗計・接地抵抗計・回路計',
      '電力計・電流計・電圧計',
      'クランプメータのみ',
    ],
    answer: 1,
    explain:
      'The 電気工事業法 requires an insulation tester, an earth tester and a multimeter measuring resistance and AC voltage.',
  },
  {
    id: 'is-12',
    category: 'inspection',
    difficulty: 2,
    q: 'A continuity test (導通試験) is performed to confirm:',
    options: [
      'The insulation is good',
      'The circuit is wired as designed with no open or crossed conductors',
      'The earth resistance is low enough',
      'The power factor is acceptable',
    ],
    answer: 1,
    explain:
      'It proves the connections match the drawing — typically done with the resistance range of a multimeter.',
  },
];

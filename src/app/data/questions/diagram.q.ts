import { Question } from '../../core/models';

export const DIAGRAM_QUESTIONS: Question[] = [
  {
    id: 'dg-1',
    category: 'diagrams',
    difficulty: 1,
    q: 'On a wiring plan, a solid line represents:',
    qJp: '配線図で実線が表すものは。',
    options: ['天井隠ぺい配線', '床隠ぺい配線', '露出配線', '地中埋設配線'],
    answer: 0,
    explain:
      'Solid = concealed in the ceiling; dashed = concealed under the floor; dotted = exposed; dash-dot = underground.',
  },
  {
    id: 'dg-2',
    category: 'diagrams',
    difficulty: 2,
    q: 'The symbol ● with a subscript 3 is:',
    options: ['単極スイッチ', '3路スイッチ', '4路スイッチ', '3A定格のスイッチ'],
    answer: 1,
    explain:
      '●₃ = 3-way switch. ●₄ = 4-way. A number like 15A written beside it instead means the rating.',
  },
  {
    id: 'dg-3',
    category: 'diagrams',
    difficulty: 2,
    q: 'Which letter beside an outlet symbol means it has an earthing pole?',
    options: ['E', 'L', 'T', 'W'],
    answer: 0,
    explain:
      'E = 接地極付. ET = 接地端子付 (separate earth terminal screw), WP = rainproof, LK = pull-out-proof.',
  },
  {
    id: 'dg-4',
    category: 'diagrams',
    difficulty: 2,
    q: 'What does the symbol Wh in a square represent?',
    options: ['配線用遮断器', '漏電遮断器', '電力量計', '開閉器'],
    answer: 2,
    explain:
      'Wh = watt-hour meter, drawn at the service entrance. B = MCB, E/BE = earth-leakage breaker, S = switch.',
  },
  {
    id: 'dg-5',
    category: 'diagrams',
    difficulty: 3,
    q: 'In a complete wiring diagram, the white (grounded) conductor goes directly to:',
    qJp: '接地側電線（白）を直接つなぐのは。',
    options: [
      'スイッチ',
      '照明器具とコンセントの接地側極',
      '3路スイッチの0番端子',
      '配線用遮断器の負荷側だけ',
    ],
    answer: 1,
    explain:
      'White goes to lamps and to the W terminal of outlets. Black (live) goes to switches and to the other outlet terminal.',
  },
  {
    id: 'dg-6',
    category: 'diagrams',
    difficulty: 3,
    q: 'How many conductors are needed between a junction box and a single-pole switch that controls one lamp?',
    options: ['1', '2', '3', '4'],
    answer: 1,
    explain: 'Live in, switched live out — two conductors. The neutral never goes to the switch.',
  },
  {
    id: 'dg-7',
    category: 'diagrams',
    difficulty: 3,
    q: 'How many conductors run between two 3-way switches controlling one lamp (excluding any extra devices)?',
    options: ['2', '3', '4', '5'],
    answer: 0,
    explain:
      'The two travellers connect terminals 1 and 3 of each switch — 2 conductors. The extra conductor in a 3-core cable is often used to bring the live or the switched live through the same run.',
  },
  {
    id: 'dg-8',
    category: 'diagrams',
    difficulty: 2,
    q: 'A ring sleeve joining two 1.6 mm conductors and one 2.0 mm conductor requires which sleeve and mark?',
    options: ['小スリーブで○', '小スリーブで小', '中スリーブで中', '大スリーブで大'],
    answer: 1,
    explain:
      'Points: 1.6 mm = 1, 2.0 mm = 2 → total 4 points → 小 sleeve with the 小 die. Only two 1.6 mm conductors (2 points) use ○.',
  },
  {
    id: 'dg-9',
    category: 'diagrams',
    difficulty: 2,
    q: 'Five 1.6 mm conductors are joined in one sleeve. Which size and mark?',
    options: ['小 / ○', '小 / 小', '中 / 中', '大 / 大'],
    answer: 2,
    explain: '5 points → 中 sleeve, 中 die. 3–4 points → 小.',
  },
  {
    id: 'dg-10',
    category: 'diagrams',
    difficulty: 2,
    q: 'The letter H beside a switch symbol means:',
    options: [
      '確認表示灯内蔵（負荷が動作中に点灯）',
      '位置表示灯内蔵（スイッチが切のとき点灯）',
      '調光器',
      '防雨形',
    ],
    answer: 1,
    explain:
      'H = locator switch, glows when OFF so you can find it in the dark. L = pilot, glows when the load is ON.',
  },
  {
    id: 'dg-11',
    category: 'diagrams',
    difficulty: 2,
    q: 'What does the symbol △ (triangle) beside a lighting circuit usually indicate on these plans?',
    options: ['リモコンリレー', '換気扇', '蛍光灯', '接地端子'],
    answer: 0,
    explain:
      'A remote-control relay (リモコンリレー), used with a low-voltage remote switch. Confirm with the legend printed on the exam plan.',
  },
  {
    id: 'dg-12',
    category: 'diagrams',
    difficulty: 2,
    q: 'Short slash marks drawn across a wiring line indicate:',
    options: [
      'The wiring method',
      'The number of conductors in that run',
      'The conduit size',
      'The circuit number',
    ],
    answer: 1,
    explain:
      'Two strokes = 2 conductors, three strokes = 3. If none are drawn, work the number out from the complete wiring diagram.',
  },
  {
    id: 'dg-13',
    category: 'diagrams',
    difficulty: 3,
    q: 'A pilot lamp wired so that it lights at the same time as the load (同時点滅) is connected:',
    options: [
      'Across the switch contacts',
      'In parallel with the load',
      'In series with the load',
      'Between live and earth',
    ],
    answer: 1,
    explain:
      '同時点滅: lamp in parallel with the load. 異時点滅 (lights when the load is off): lamp across the switch contacts. 常時点灯: lamp straight across live and neutral.',
  },
  {
    id: 'dg-14',
    category: 'diagrams',
    difficulty: 2,
    q: 'On the incoming supply the note 「1φ3W 100/200V」 means:',
    options: [
      'Single-phase 2-wire',
      'Single-phase 3-wire',
      'Three-phase 3-wire',
      'Three-phase 4-wire',
    ],
    answer: 1,
    explain: '1φ3W = 単相3線式, giving both 100 V and 200 V.',
  },
  {
    id: 'dg-15',
    category: 'diagrams',
    difficulty: 2,
    q: 'The symbol for a ceiling rose (引掛シーリング) on a plan is drawn as:',
    options: [
      'A filled circle',
      'A circle with a small square or the letters CL / ⊕ style mark',
      'A triangle',
      'A rectangle with hatching',
    ],
    answer: 1,
    explain:
      'Rose symbols are circular with a distinguishing mark; the filled circle ● is a switch and the hatched rectangle is the distribution board.',
  },
  {
    id: 'dg-16',
    category: 'diagrams',
    difficulty: 2,
    q: 'Which of these is drawn as a rectangle with diagonal hatching?',
    options: ['分電盤', 'コンセント', '換気扇', '点滅器'],
    answer: 0,
    explain: '分電盤 (distribution board). 配電盤 and 制御盤 use related hatched rectangles.',
  },
  {
    id: 'dg-17',
    category: 'diagrams',
    difficulty: 3,
    q: 'An outlet drawn with the note 「2口 E」 means:',
    options: [
      'Two outlets, one earthed',
      'A double outlet with an earthing pole',
      'A 2 A outlet',
      'A two-way switch',
    ],
    answer: 1,
    explain:
      '2口 = double (two sockets in one device); E = earthing pole. Numbers of sockets and letters are both written beside the symbol.',
  },
  {
    id: 'dg-18',
    category: 'diagrams',
    difficulty: 3,
    q: 'Which conductor colour must go to the screw shell terminal of a lamp receptacle?',
    options: ['Black', 'White', 'Red', 'Green'],
    answer: 1,
    explain:
      'The grounded (white) conductor goes to the 受金ねじ部 / W terminal so the shell is not live. This is checked in the practical exam too.',
  },
  {
    id: 'dg-19',
    category: 'diagrams',
    difficulty: 2,
    q: 'What does an arrow pointing up beside a wiring line mean?',
    options: ['立上り (riser)', '引下げ (drop)', '素通し (pass-through)', '接地'],
    answer: 0,
    explain:
      '立上り = wiring goes up to the floor above; 引下げ = comes down; 素通し = passes straight through.',
  },
  {
    id: 'dg-20',
    category: 'diagrams',
    difficulty: 3,
    q: 'A run from the box to a device plate carrying one outlet AND one switch on the same frame normally needs:',
    options: ['2 conductors', '3 conductors', '4 conductors', '5 conductors'],
    answer: 1,
    explain:
      'The outlet needs live + neutral; the switch shares the live and returns the switched live — 3 conductors in total.',
  },
];

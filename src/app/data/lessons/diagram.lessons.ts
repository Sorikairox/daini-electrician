import { Lesson } from '../../core/models';

export const DIAGRAM_LESSONS: Lesson[] = [
  {
    id: 'reading-the-plan',
    category: 'diagrams',
    title: 'How the 配線図 section works',
    titleJp: '配線図問題の解き方',
    minutes: 9,
    summary: 'Twenty of the fifty questions come from one house plan. Here is what they ask.',
    blocks: [
      {
        kind: 'p',
        text: 'The last section of the written exam prints a floor plan of a small house or shop and asks twenty questions about it. The questions repeat every year in the same shapes, so this section is the cheapest place to gain marks.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          '「①で示される…」 — what is the device at the circled position? (symbol recognition)',
          '「最少電線本数」 — what is the minimum number of conductors in this run?',
          '「リングスリーブの最小個数」 — how many ring sleeves of each size are needed in this box?',
          '「ここで使用する工具は」 — which of these four photographed tools is used here?',
          '「ここに施工する工事は」 — which wiring method / material is correct here?',
        ],
      },
      { kind: 'h', text: 'Line styles', jp: '配線の種類' },
      {
        kind: 'table',
        head: ['Line', 'Japanese', 'Meaning'],
        rows: [
          ['Solid ──', '天井隠ぺい配線', 'Concealed in the ceiling.'],
          ['Dashed ┈┈', '床隠ぺい配線', 'Concealed under the floor.'],
          ['Dotted ····', '露出配線', 'Run on the surface.'],
          ['Dash-dot ━·━', '地中埋設配線', 'Buried underground.'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Slash marks on a run',
        text: 'Short strokes across a wiring line count the conductors: two strokes = 2 conductors. If the drawing has none, you must work the number out yourself from the complete wiring diagram.',
      },
    ],
  },
  {
    id: 'fukusenzu',
    category: 'diagrams',
    title: 'Single-line to complete wiring diagram',
    titleJp: '単線図から複線図へ',
    minutes: 15,
    summary:
      'The five-step method that solves both the wire-count questions and the practical exam.',
    blocks: [
      {
        kind: 'p',
        text: 'The exam gives you a 単線図 (one line per run). To wire anything — or to count conductors — you redraw it as a 複線図 showing every conductor. Follow exactly the same five steps every time and it becomes mechanical.',
      },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Draw the devices in their positions: source, lamps, switches, outlets, boxes.',
          'WHITE first: run the 接地側電線 (neutral) from the source to every lamp and to the W terminal of every outlet. Never to a switch.',
          'BLACK next: run the 非接地側電線 (live) from the source to every switch and to the non-W terminal of every outlet. Never directly to a lamp that has a switch.',
          'Connect each switch’s output back to the lamp it controls. Any remaining colour (red, or white in a 3-core where the conditions allow) is used here.',
          'Mark every joint inside the boxes, count the conductors in each run, and pick the ring sleeve size or connector for each joint.',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Practise it visually',
        text: 'The Diagrams page (複線図トレーナー) in the sidebar builds four of these circuits step by step and then asks you for the conductor counts and the ring sleeve of every joint.',
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Memorise this sentence',
        text: '白は電球とコンセントへ、黒はスイッチとコンセントへ — “white goes to lamps and outlets, black goes to switches and outlets.” Every 複線図 starts there.',
      },
      { kind: 'h', text: 'Three-way switch circuits', jp: '3路スイッチの配線' },
      {
        kind: 'list',
        items: [
          'Black (live) enters terminal 0 of the first 3-way switch.',
          'Terminals 1 and 3 of the two switches are joined by two “traveller” conductors.',
          'Terminal 0 of the second switch goes to the lamp; the lamp’s other side is white.',
          'With a 4-way switch, it is inserted into the two travellers between the 3-way switches.',
        ],
      },
      { kind: 'h', text: 'Counting conductors', jp: '最少電線本数の数え方' },
      {
        kind: 'table',
        head: ['Run', 'Typical conductor count'],
        rows: [
          ['Source → box', '2 (black + white)'],
          ['Box → lamp with its own switch', '2 (switched live + white)'],
          ['Box → single-pole switch', '2 (black in, switched live out)'],
          ['Box → outlet', '2 (black + white)'],
          ['Box → outlet + switch on one frame', '3'],
          ['3-way switch ↔ 3-way switch', '3 (two travellers + a shared conductor)'],
        ],
        caption: 'Always verify by drawing — the plan’s device combinations change the count.',
      },
      {
        kind: 'example',
        question:
          'A box feeds one ceiling lamp controlled by one single-pole switch, plus one outlet. How many conductors in the run from the box to the switch?',
        steps: [
          'The switch needs the live in (black) and the switched live out.',
          'The neutral does not go to the switch.',
        ],
        answer: '2 conductors',
      },
    ],
  },
  {
    id: 'symbol-drill',
    category: 'diagrams',
    title: 'Symbols and their letter marks',
    titleJp: '図記号と傍記記号',
    minutes: 10,
    summary: 'The letters written beside a symbol carry half the meaning.',
    blocks: [
      {
        kind: 'p',
        text: 'Use the Symbols page of this app for the drawings. This lesson is about the small letters printed next to them — the part that decides which of the four answer choices is right.',
      },
      {
        kind: 'table',
        head: ['Mark', 'Japanese', 'Meaning'],
        rows: [
          ['●₃', '3路スイッチ', '3-way switch'],
          ['●₄', '4路スイッチ', '4-way switch'],
          ['●_H', '位置表示灯内蔵', 'Locator switch, glows when off'],
          ['●_L', '確認表示灯内蔵', 'Pilot switch, glows when on'],
          ['●_A', '自動点滅器', 'Photoelectric switch (with its rating, e.g. A(3A))'],
          ['●_P', 'プルスイッチ', 'Pull switch'],
          ['●_15A', '定格電流', 'Rating written beside the device'],
          ['TS', 'タイムスイッチ', 'Time switch'],
          ['B', '配線用遮断器', 'MCB'],
          ['E', '漏電遮断器', 'Earth-leakage breaker (BE when combined)'],
          ['S', '開閉器', 'Switch / disconnector'],
          ['Wh', '電力量計', 'Watt-hour meter'],
          ['⊕ / ○', '一般照明', 'General lighting outlet'],
          ['WP', '防雨形', 'Rainproof'],
          ['E / ET', '接地極付 / 接地端子付', 'Earthing pole / earthing terminal'],
          ['2φ2W / 1φ3W', '配電方式', 'Written at the incoming supply'],
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Read the subscript before the shape',
        text: 'Two answer choices often show the same symbol with different letters. Train yourself to read the mark first — H vs L is the classic trap (off-glow vs on-glow).',
      },
    ],
  },
];

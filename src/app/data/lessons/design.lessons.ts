import { Lesson } from '../../core/models';
import { N } from '../notation.data';

export const DESIGN_LESSONS: Lesson[] = [
  {
    id: 'distribution-systems',
    category: 'wiring-design',
    title: 'Distribution systems and the neutral',
    titleJp: '配電方式と中性線',
    minutes: 10,
    summary:
      'The three supply arrangements you will meet, and why the neutral must never be interrupted.',
    blocks: [
      {
        kind: 'terms',
        terms: [
          {
            jp: '単相2線式',
            kana: 'たんそうにせんしき',
            romaji: 'tansō nisenshiki',
            en: 'single-phase 2-wire, 100 V',
            category: 'wiring-design',
          },
          {
            jp: '単相3線式',
            kana: 'たんそうさんせんしき',
            romaji: 'tansō sansenshiki',
            en: 'single-phase 3-wire, 100/200 V — the normal house supply',
            category: 'wiring-design',
          },
          {
            jp: '三相3線式',
            kana: 'さんそうさんせんしき',
            romaji: 'sansō sansenshiki',
            en: 'three-phase 3-wire, 200 V — motors and shops',
            category: 'wiring-design',
          },
          {
            jp: '中性線',
            kana: 'ちゅうせいせん',
            romaji: 'chūseisen',
            en: 'neutral conductor (white)',
            category: 'wiring-design',
          },
          {
            jp: '欠相',
            kana: 'けっそう',
            romaji: 'kessō',
            en: 'loss of a phase / open conductor',
            category: 'wiring-design',
          },
        ],
      },
      { kind: 'h', text: 'Single-phase 3-wire', jp: '単相3線式' },
      {
        kind: 'p',
        text: 'Two live conductors (black and red) sit 200 V apart, with a neutral (white) in the middle. Any live-to-neutral pair gives 100 V; live-to-live gives 200 V for an air conditioner or an IH cooker.',
      },
      {
        kind: 'formula',
        latexish: 'I_neutral = | I₁ − I₂ |',
        caption: 'Neutral current 中性線に流れる電流',
        symbols: [N.IN, N.I1, N.I2],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'Never fuse or switch the neutral',
        text: '中性線には過電流遮断器を施設してはならない. If the neutral opens (中性線の欠相), the two 100 V loads end up in series across 200 V: the small load sees far more than 100 V and is destroyed.',
      },
      {
        kind: 'list',
        items: [
          'Load unbalance should stay within 40 % — a バランサ can equalise it.',
          'A 1φ3W main breaker for a house is typically 30 A, 40 A, 50 A or 60 A.',
          'The transformer neutral point is earthed with class-B earthing (B種接地工事).',
        ],
      },
      {
        kind: 'example',
        question:
          'A 1φ3W circuit supplies 12 A on one side and 8 A on the other. What current flows in the neutral?',
        steps: ['I_neutral = | I₁ − I₂ | = | 12 − 8 | = 4 A'],
        answer: '4 A',
        symbols: [N.s1p3w, N.IN, N.uA],
      },
    ],
  },
  {
    id: 'voltage-drop',
    category: 'wiring-design',
    title: 'Voltage drop and line loss',
    titleJp: '電圧降下と電力損失',
    minutes: 10,
    summary: 'Count the conductors that carry current, then apply the right coefficient.',
    blocks: [
      {
        kind: 'terms',
        terms: [
          {
            jp: '電圧降下',
            kana: 'でんあつこうか',
            romaji: 'den’atsu kōka',
            en: 'voltage drop',
            category: 'wiring-design',
          },
          {
            jp: '電力損失',
            kana: 'でんりょくそんしつ',
            romaji: 'denryoku sonshitsu',
            en: 'power loss in the line',
            category: 'wiring-design',
          },
          {
            jp: '1線当たり',
            kana: 'いっせんあたり',
            romaji: 'issen atari',
            en: 'per conductor',
            category: 'wiring-design',
          },
          {
            jp: '線路',
            kana: 'せんろ',
            romaji: 'senro',
            en: 'the line / feeder run',
            category: 'wiring-design',
          },
        ],
      },
      {
        kind: 'table',
        head: ['System', 'Voltage drop', 'Line loss'],
        rows: [
          ['単相2線式 1φ2W', 'e = 2 I r', 'P = 2 I² r'],
          ['単相3線式 1φ3W (live–neutral)', 'e = I r', 'P = 2 I² r'],
          ['三相3線式 3φ3W', 'e = √3 I r', 'P = 3 I² r'],
        ],
        caption:
          'r = resistance of one conductor. The two-wire circuit has go and return, so the drop is doubled.',
      },
      {
        kind: 'formula',
        latexish:
          '1φ2W: e = 35.6 L I / (1000 A)\n1φ3W: e = 17.8 L I / (1000 A)\n3φ3W: e = 30.8 L I / (1000 A)',
        caption: 'Drop directly from length and conductor area',
        symbols: [N.s1p2w, N.s1p3w, N.s3p3w, N.e, N.Llength, N.I, N.Larea],
        where: ['A here is the conductor area in mm², not amperes.'],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Design target',
        text: 'Drop from the service entrance to the load should normally stay within 2 % of the nominal voltage for the feeder and 2 % for the branch circuit (i.e. 2 V on a 100 V circuit).',
      },
      {
        kind: 'example',
        question:
          '1φ2W, 100 V, current 10 A, one-way length 20 m, conductor 2.0 mm² (r = 0.1 Ω per conductor for the run). Find the voltage drop.',
        steps: ['e = 2 × I × r = 2 × 10 × 0.1.', '= 2 V, so the load sees 98 V.'],
        answer: '2 V',
        symbols: [N.s1p2w, N.e, N.I, N.r1, N.uV, N.uA, N.uOhm],
      },
    ],
  },
  {
    id: 'ampacity',
    category: 'wiring-design',
    title: 'Allowable current and grouping factors',
    titleJp: '許容電流と電流減少係数',
    minutes: 9,
    summary:
      'The ampacity table you must know by heart, and what happens inside a crowded conduit.',
    blocks: [
      {
        kind: 'table',
        head: ['Solid wire 単線', 'Ampacity', 'Stranded より線', 'Ampacity'],
        rows: [
          ['1.6 mm', '27 A', '2 mm²', '27 A'],
          ['2.0 mm', '35 A', '3.5 mm²', '37 A'],
          ['2.6 mm', '48 A', '5.5 mm²', '49 A'],
          ['3.2 mm', '62 A', '8 mm²', '61 A'],
        ],
        caption: '600 V PVC-insulated wire in air, at 30 °C ambient.',
      },
      {
        kind: 'table',
        head: ['Conductors in one conduit 同一管内の電線数', 'Reduction factor 電流減少係数'],
        rows: [
          ['3 or fewer', '0.70'],
          ['4', '0.63'],
          ['5–6', '0.56'],
          ['7–15', '0.49'],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'How the question is worded',
        text: '「同一管内に４本の電線を収めた場合」 = “when 4 conductors are run in the same conduit”. Multiply the base ampacity by the factor and round down (小数点以下は切り捨て).',
      },
      {
        kind: 'example',
        question: '1.6 mm wires, 4 in one conduit. Allowable current?',
        steps: ['I_allow = I_base × k = 27 A × 0.63', '= 17.01 A, rounded down to 17 A'],
        answer: '17 A',
        symbols: [N.Iallow, N.Ibase, N.k, N.uA],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'A 3-core VVF is “3 or fewer”',
        text: 'VVF 1.6-3C counts as three conductors, so k = 0.70 → 27 × 0.70 = 18.9 → 18 A.',
      },
    ],
  },
  {
    id: 'branch-circuits',
    category: 'wiring-design',
    title: 'Branch circuits and breaker placement',
    titleJp: '分岐回路と過電流遮断器の施設',
    minutes: 12,
    summary: 'The breaker / wire size / outlet rating table, plus the 3 m – 8 m – unlimited rule.',
    blocks: [
      {
        kind: 'table',
        head: [
          'Breaker rating 分岐回路の種類',
          'Min. conductor 電線の太さ',
          'Outlet rating コンセント',
        ],
        rows: [
          ['15 A', '1.6 mm', '15 A or less'],
          ['20 A 配線用遮断器', '1.6 mm', '20 A or less'],
          ['20 A fuse ヒューズ', '2.0 mm', '20 A'],
          ['30 A', '2.6 mm (5.5 mm²)', '20 A – 30 A'],
          ['40 A', '8 mm²', '30 A – 40 A'],
          ['50 A', '14 mm²', '40 A – 50 A'],
        ],
        caption: 'Learn the first two rows perfectly — they cover most house circuits.',
      },
      { kind: 'h', text: 'Where the branch breaker may sit', jp: '分岐点からの距離' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Normally the overcurrent device must be within 3 m of the tap-off point (原則 3 m 以内).',
          'If the branch conductor’s ampacity is at least 35 % of the feeder breaker rating → up to 8 m.',
          'If it is at least 55 % → no distance limit (制限なし).',
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Memory hook',
        text: '3 → 8 → ∞ matches 0 % → 35 % → 55 %. The stronger the branch conductor, the further away the breaker may be.',
      },
      { kind: 'h', text: 'Other branch-circuit rules', jp: 'その他の規定' },
      {
        kind: 'list',
        items: [
          'A branch circuit rated over 30 A must not supply ordinary appliances plugged into small outlets.',
          'Circuits for a住宅 (dwelling) whose 対地電圧 exceeds 150 V need special measures; 200 V appliance circuits must be dedicated and the equipment fixed in place.',
          'An earth-leakage breaker (漏電遮断器) is required where metal-cased equipment over 60 V could be touched.',
        ],
      },
    ],
  },
  {
    id: 'feeder-design',
    category: 'wiring-design',
    title: 'Sizing a main feeder with motors',
    titleJp: '幹線の設計（電動機がある場合）',
    minutes: 11,
    summary: 'The three-case ampacity rule and the breaker limit, with a worked example.',
    blocks: [
      {
        kind: 'terms',
        terms: [
          {
            jp: '幹線',
            kana: 'かんせん',
            romaji: 'kansen',
            en: 'main feeder',
            category: 'wiring-design',
          },
          {
            jp: '電動機',
            kana: 'でんどうき',
            romaji: 'dendōki',
            en: 'motor',
            category: 'wiring-design',
          },
          {
            jp: '定格電流の合計',
            kana: 'ていかくでんりゅうのごうけい',
            romaji: 'teikaku denryū no gōkei',
            en: 'total of the rated currents',
            category: 'wiring-design',
          },
        ],
      },
      {
        kind: 'formula',
        latexish:
          'I_M ≤ I_H        → I_W ≥ I_M + I_H\nI_M > I_H, I_M ≤ 50 A → I_W ≥ 1.25 I_M + I_H\nI_M > I_H, I_M > 50 A → I_W ≥ 1.1 I_M + I_H',
        caption: 'Required feeder ampacity 幹線の許容電流',
        symbols: [N.IM, N.IH, N.IW, N.uA],
        where: [
          'I_M: total motor current',
          'I_H: total current of other loads',
          'I_W: feeder ampacity',
        ],
      },
      {
        kind: 'formula',
        latexish: 'I_B ≤ 3 I_M + I_H   and   I_B ≤ 2.5 I_W  → take the smaller',
        caption: 'Feeder overcurrent device rating 過電流遮断器の定格',
        symbols: [N.IB, N.IM, N.IH, N.IW],
      },
      {
        kind: 'example',
        question:
          'Motors total 30 A, heaters total 10 A. Find the minimum feeder ampacity and the maximum breaker rating.',
        steps: [
          'I_M (30) > I_H (10) and I_M ≤ 50 A → I_W ≥ 1.25 × 30 + 10 = 47.5 A',
          'I_B ≤ 3 I_M + I_H = 3 × 30 + 10 = 100 A',
          'I_B ≤ 2.5 I_W = 2.5 × 47.5 = 118.75 A → take the smaller, 100 A',
        ],
        answer: 'Feeder ≥ 47.5 A; breaker ≤ 100 A',
        symbols: [N.IM, N.IH, N.IW, N.IB, N.uA],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Why 1.25 and 1.1',
        text: 'Motors draw a large starting current. Small motor groups need proportionally more headroom, which is why the factor drops from 1.25 to 1.1 once the motor total passes 50 A.',
      },
    ],
  },
];

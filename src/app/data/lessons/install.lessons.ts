import { Lesson } from '../../core/models';

export const INSTALL_LESSONS: Lesson[] = [
  {
    id: 'wiring-methods',
    category: 'installation',
    title: 'Which wiring method is allowed where',
    titleJp: '場所別に施設できる工事',
    minutes: 11,
    summary:
      'Two methods are allowed everywhere; everything else depends on damp, wet or hidden locations.',
    blocks: [
      {
        kind: 'terms',
        terms: [
          {
            jp: '展開した場所',
            explain:
              'An open location — the wiring is in plain view and you can walk up to it, as in a garage or a plant room. The least restricted case in the rules.',
            kana: 'てんかいしたばしょ',
            romaji: 'tenkai shita basho',
            en: 'open / exposed location',
            category: 'installation',
          },
          {
            jp: '点検できる隠ぺい場所',
            explain:
              'Hidden from sight but reachable afterwards, such as above a ceiling with an access hatch. More methods are allowed here than where nobody can ever get back in.',
            kana: 'てんけんできるいんぺいばしょ',
            romaji: 'tenken dekiru inpei basho',
            en: 'concealed but accessible location',
            category: 'installation',
          },
          {
            jp: '点検できない隠ぺい場所',
            explain:
              'Sealed in for good — buried in a wall, cast into concrete. Only the most robust methods are permitted, because no one will ever inspect it again.',
            kana: 'てんけんできないいんぺいばしょ',
            romaji: 'tenken dekinai inpei basho',
            en: 'concealed and inaccessible location',
            category: 'installation',
          },
          {
            jp: '乾燥した場所',
            explain:
              'A normally dry location. Several rules relax here, including some of the cases where earthing may be left out.',
            kana: 'かんそうしたばしょ',
            romaji: 'kansō shita basho',
            en: 'dry location',
            category: 'installation',
          },
          {
            jp: '湿気の多い場所',
            kana: 'しっけのおおいばしょ',
            romaji: 'shikke no ōi basho',
            en: 'damp location',
            category: 'installation',
          },
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'The single most useful fact',
        text: 'ケーブル工事・金属管工事・合成樹脂管工事（CD管を除く） are permitted in every location, dry or wet, exposed or concealed. If a question asks 「すべての場所に施設できる工事」, those are the answers.',
      },
      {
        kind: 'list',
        items: [
          'がいし引き工事: only in exposed or accessible-concealed locations.',
          '金属線ぴ・ライティングダクト・金属ダクト: dry locations only, exposed or accessible-concealed.',
          'フロアダクト・セルラダクト: concealed in a dry floor.',
          'CD管: must be embedded in concrete (直接コンクリートに埋設).',
        ],
      },
      { kind: 'h', text: 'Support spacing', jp: '支持点間距離' },
      {
        kind: 'table',
        head: ['Item', 'Maximum spacing'],
        rows: [
          ['Cable along a building member ケーブルを造営材に沿って', '2 m'],
          ['Cable run vertically where people cannot touch it', '6 m'],
          ['Steel conduit 金属管', '2 m'],
          ['Rigid plastic conduit 合成樹脂管', '1.5 m'],
          ['Lighting duct ライティングダクト', '2 m'],
          ['Metal raceway 金属線ぴ', '1.5 m'],
        ],
      },
      { kind: 'h', text: 'Other numbers worth memorising', jp: '覚えておく数値' },
      {
        kind: 'list',
        items: [
          'Conduit bend: inside radius ≥ 6 × inside diameter (管内径の6倍以上).',
          'Rigid PVC conduit insertion depth: ≥ 1.2 × outside diameter (0.8 × when adhesive is used).',
          'Steel conduit wall thickness: ≥ 1.2 mm when embedded in concrete, ≥ 1 mm otherwise.',
          'Lighting duct: openings face downward, ends closed, and it must not pass through a wall or floor.',
        ],
      },
    ],
  },
  {
    id: 'earthing',
    category: 'installation',
    title: 'Earthing (grounding) classes',
    titleJp: '接地工事の種類',
    minutes: 10,
    summary:
      'A, B, C and D — the resistance values, the wire sizes, and when class D can be omitted.',
    blocks: [
      {
        kind: 'table',
        head: ['Class', 'Where', 'Max resistance', 'Min conductor'],
        rows: [
          ['A種', 'HV equipment enclosures 高圧機器の外箱', '10 Ω', '2.6 mm'],
          ['B種', 'Transformer neutral 変圧器の低圧側中性点', '150/Ig Ω (formula)', '4.0 mm'],
          ['C種', 'LV equipment over 300 V', '10 Ω (500 Ω with a 0.5 s RCD)', '1.6 mm'],
          ['D種', 'LV equipment 300 V and below', '100 Ω (500 Ω with a 0.5 s RCD)', '1.6 mm'],
        ],
        caption: 'Almost everything a 2nd-class electrician touches is D種接地工事.',
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'The 0.5-second rule',
        text: '地絡を生じた場合に0.5秒以内に自動的に電路を遮断する装置を施設するときは500Ω以下 — if an RCD clears an earth fault within 0.5 s, class C and D may relax to 500 Ω.',
      },
      { kind: 'h', text: 'When class-D earthing may be omitted', jp: 'D種接地工事の省略' },
      {
        kind: 'list',
        items: [
          'Equipment at 150 V or less to earth, installed in a dry location.',
          'Double-insulated equipment (二重絶縁の機械器具).',
          'Supplied through an isolating transformer (絶縁変圧器, secondary ≤ 300 V, ≤ 3 kV·A) whose secondary is not earthed.',
          'An RCD with rated sensitivity ≤ 15 mA and operating time ≤ 0.1 s protects the circuit, in a location free of water.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'Never omit in wet places',
        text: '水気のある場所 (bathrooms, outdoors, washing machine outlets) always needs the earth connection — that is why a washing-machine outlet is 接地極付 (E).',
      },
    ],
  },
  {
    id: 'connections',
    category: 'installation',
    title: 'Joints, boxes and ring sleeves',
    titleJp: '電線の接続とボックス内の処理',
    minutes: 10,
    summary:
      'The legal requirements for a joint, and how to pick the right ring sleeve and crimp mark.',
    blocks: [
      { kind: 'h', text: 'The four rules for a joint', jp: '電線接続の原則' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Do not increase the electrical resistance (電気抵抗を増加させない).',
          'Do not reduce the tensile strength by more than 20 % (引張強さを20%以上減少させない).',
          'Insulate the joint at least as well as the original insulation (絶縁被覆と同等以上の絶縁効力).',
          'Make the joint inside a box (ボックス内で接続する) — never buried in a wall or inside a conduit.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'No joints inside conduit',
        text: '電線管の中では接続してはならない. Every joint lives in an outlet box or junction box that can be inspected.',
      },
      { kind: 'h', text: 'Choosing a ring sleeve', jp: 'リングスリーブの選定' },
      {
        kind: 'table',
        head: ['Conductors joined', 'Sleeve', 'Crimp mark 圧着マーク'],
        rows: [
          ['1.6 mm × 2', '小', '○'],
          ['1.6 mm × 3–4', '小', '小'],
          ['2.0 mm × 2', '小', '小'],
          ['2.0 mm × 1 + 1.6 mm × 1–2', '小', '小'],
          ['1.6 mm × 5–6', '中', '中'],
          ['2.0 mm × 3–4', '中', '中'],
          ['2.0 mm × 2 + 1.6 mm × 1–3', '中', '中'],
        ],
        caption:
          'Rule of thumb: count 1.6 mm as 1 point and 2.0 mm as 2 points. 2 points = ○, 3–4 points = 小, 5–10 points = 中.',
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'The ○ mark exists only for 1.6 × 2',
        text: 'The smallest die (○) on the yellow crimping tool is used only when joining exactly two 1.6 mm conductors. Everything else uses 小 or larger — this is a favourite 配線図 question and a common practical-exam defect.',
      },
      {
        kind: 'list',
        items: [
          'Push-in connectors (差込形コネクタ) have a fixed number of holes; strip the conductor to the gauge printed on the connector and push until the copper is visible in the window but not below it.',
          'Unused holes are fine; a conductor that is not fully inserted is a defect.',
        ],
      },
    ],
  },
];

import { Lesson } from '../../core/models';

export const PRACTICAL_LESSONS: Lesson[] = [
  {
    id: 'practical-overview',
    category: 'practical',
    title: 'The practical exam in 40 minutes',
    titleJp: '技能試験の進め方',
    minutes: 10,
    summary:
      'What happens on the day, and a minute-by-minute plan that finishes with time to check.',
    blocks: [
      {
        kind: 'p',
        text: 'You get a sealed box of materials, a single-line diagram with written 施工条件, and 40 minutes. One of the 13 published candidate problems is used. Bring your own tools; a power tool is not allowed except a battery screwdriver (confirm the current rule in the application booklet).',
      },
      { kind: 'h', text: 'Time plan', jp: '時間配分' },
      {
        kind: 'table',
        head: ['Minutes', 'What to do'],
        rows: [
          [
            '0–5',
            'Check the supplied materials against the list. Draw the 複線図 on the exam paper.',
          ],
          ['5–10', 'Cut every cable to length and strip the sheaths.'],
          [
            '10–30',
            'Make up the devices: receptacles, ceiling rose, switches, terminal block, conduit.',
          ],
          ['30–37', 'Make the joints — ring sleeves and push-in connectors — in the boxes.'],
          ['37–40', 'Inspect everything against the 欠陥 list and the 施工条件.'],
        ],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'One defect fails the whole task',
        text: 'There is no partial credit: 欠陥が一つでもあると不合格. Speed is worthless without a final inspection pass.',
      },
      { kind: 'h', text: 'The 施工条件 you must obey', jp: '施工条件の読み方' },
      {
        kind: 'list',
        items: [
          '接地側電線にはすべて白色を使用 — white for every grounded conductor.',
          'コンセントの接地側極へは白 — white to the W terminal of each outlet.',
          'ランプレセプタクルの受金ねじ部へは白 — white to the screw shell of the lamp holder.',
          '接続はリングスリーブ / 差込形コネクタ — the conditions state which connector to use in which box.',
          'Any colour instruction for a 3-core cable (e.g. “use black for the live, red for the switched live”).',
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Practise the whole 13',
        text: 'Buy a practice material set (練習用材料セット) and build every candidate problem at least twice. The second run is where the time drops from 55 minutes to 30.',
      },
    ],
  },
  {
    id: 'practical-technique',
    category: 'practical',
    title: 'Core hand skills',
    titleJp: '基本作業のポイント',
    minutes: 12,
    summary: 'Stripping lengths, the clockwise loop, ring-sleeve crimping and the ceiling rose.',
    blocks: [
      { kind: 'h', text: 'Standard strip lengths', jp: '標準的な寸法' },
      {
        kind: 'table',
        head: ['Where', 'Sheath removed 外装', 'Insulation removed 絶縁被覆'],
        rows: [
          ['Inside a joint (ring sleeve)', '100 mm', '20 mm'],
          ['Inside a joint (push-in connector)', '100 mm', 'As printed on the connector (≈ 12 mm)'],
          ['Lamp receptacle / surface outlet', '40 mm', '20 mm then form the loop'],
          ['Ceiling rose 引掛シーリング', '20 mm', 'Per the gauge moulded on the body'],
          ['Flush device (switch / outlet)', '100 mm', '≈ 12 mm, per the strip gauge on the back'],
        ],
        caption:
          'Figures are the usual working values taught for the exam; the gauge printed on each device is always authoritative.',
      },
      { kind: 'h', text: 'The clockwise loop', jp: '輪作り' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Strip about 20 mm of insulation.',
          'Bend the bare conductor into a circle slightly larger than the screw.',
          'Hook it under the screw so that tightening (clockwise) closes the loop.',
          'No insulation caught under the screw, no bare conductor sticking out more than about 3 mm.',
        ],
      },
      { kind: 'h', text: 'Crimping a ring sleeve', jp: 'リングスリーブの圧着' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Line the conductor ends up flush and push them fully into the sleeve.',
          'Choose the die by the conductor count: exactly two 1.6 mm → ○; otherwise 小 / 中 / 大.',
          'Crimp once, squarely, near the top of the sleeve. Never crimp the same sleeve twice.',
          'Cut the protruding conductor tips off neatly and check that no bare copper shows below the sleeve.',
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Ceiling rose and receptacle polarity',
        text: 'On the 引掛シーリング and the ランプレセプタクル the WHITE conductor goes to the terminal marked W / 接地側. Examiners check this on every task.',
      },
      { kind: 'h', text: 'Conduit work', jp: '管工事' },
      {
        kind: 'list',
        items: [
          'ねじなし電線管 (E19): tighten the set screw until its head snaps off — leaving it on is a defect.',
          'Fit a 絶縁ブッシング on the box side and a ボンド線 where the conditions require bonding.',
          'PF conduit: push the connector fully home so no corrugation shows inside the box.',
        ],
      },
    ],
  },
];

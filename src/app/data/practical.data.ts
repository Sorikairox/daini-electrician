import { CandidateProblem, Defect, ToolItem } from '../core/models';

export const TOOLS: ToolItem[] = [
  {
    id: 'penchi',
    jp: 'ペンチ',
    kana: 'ペンチ',
    romaji: 'penchi',
    en: 'Combination pliers',
    use: 'Cut cable, twist and cut conductors, form loops.',
    required: true,
    group: 'basic',
  },
  {
    id: 'driver-plus',
    jp: 'プラスドライバ',
    kana: 'プラスドライバ',
    romaji: 'purasu doraiba',
    en: 'Phillips screwdriver (No. 2)',
    use: 'Device terminals, mounting frames, cover plates.',
    required: true,
    group: 'basic',
  },
  {
    id: 'driver-minus',
    jp: 'マイナスドライバ',
    kana: 'マイナスドライバ',
    romaji: 'mainasu doraiba',
    en: 'Flat screwdriver',
    use: 'Terminal blocks, and releasing push-in connectors.',
    required: true,
    group: 'basic',
  },
  {
    id: 'knife',
    jp: '電工ナイフ',
    kana: 'でんこうナイフ',
    romaji: 'denkō naifu',
    en: 'Electrician’s knife',
    use: 'Strip cable sheath, especially on round VVR.',
    required: true,
    group: 'basic',
  },
  {
    id: 'scale',
    jp: 'スケール',
    kana: 'スケール',
    romaji: 'sukēru',
    en: 'Tape measure / ruler',
    use: 'Cut cables to the lengths on the drawing.',
    required: true,
    group: 'basic',
  },
  {
    id: 'pump-pliers',
    jp: 'ウォータポンププライヤ',
    kana: 'ウォータポンププライヤ',
    romaji: 'wōta ponpu puraiya',
    en: 'Water-pump pliers',
    use: 'Tighten lock nuts and threadless conduit connectors.',
    required: true,
    group: 'conduit',
  },
  {
    id: 'crimper',
    jp: 'リングスリーブ用圧着工具',
    kana: 'リングスリーブようあっちゃくこうぐ',
    romaji: 'atchaku kōgu',
    en: 'Ring-sleeve crimping tool',
    use: 'Crimp ring sleeves. Yellow handles, dies ○ / 小 / 中 / 大.',
    required: true,
    group: 'basic',
  },
  {
    id: 'stripper',
    jp: 'VVFストリッパ',
    kana: 'ブイブイエフストリッパ',
    romaji: 'VVF sutorippa',
    en: 'VVF cable stripper',
    use: 'Not required, but it is the single biggest time saver in the practical exam.',
    required: false,
    group: 'basic',
  },
  {
    id: 'bender',
    jp: 'パイプベンダ',
    kana: 'パイプベンダ',
    romaji: 'paipu benda',
    en: 'Conduit bender',
    use: 'Bending steel conduit (not needed for the current candidate problems, which use pre-cut conduit).',
    required: false,
    group: 'conduit',
  },
  {
    id: 'reamer',
    jp: 'リーマ',
    kana: 'リーマ',
    romaji: 'rīma',
    en: 'Reamer',
    use: 'Deburr a cut conduit.',
    required: false,
    group: 'conduit',
  },
  {
    id: 'megger',
    jp: '絶縁抵抗計',
    kana: 'ぜつえんていこうけい',
    romaji: 'zetsuen teikōkei',
    en: 'Insulation tester',
    use: 'Written exam only — but a contractor’s office must own one.',
    required: false,
    group: 'measuring',
  },
  {
    id: 'earth-tester',
    jp: '接地抵抗計',
    kana: 'せっちていこうけい',
    romaji: 'setchi teikōkei',
    en: 'Earth resistance tester',
    use: 'Written exam only.',
    required: false,
    group: 'measuring',
  },
  {
    id: 'tester',
    jp: '回路計',
    kana: 'かいろけい',
    romaji: 'kairokei',
    en: 'Multimeter',
    use: 'Written exam only.',
    required: false,
    group: 'measuring',
  },
];

/**
 * The examination centre publishes 13 candidate problems (候補問題) before each
 * practical exam and one of them is set on the day. The exact list is renewed
 * every year — these are the recurring archetypes that the published set is
 * built from. ALWAYS download the official PDF for your own sitting.
 */
export const CANDIDATE_ARCHETYPES: CandidateProblem[] = [
  {
    no: 1,
    title: 'Two lights, two switches',
    titleJp: '2灯2スイッチの基本回路',
    devices: ['引掛シーリング', 'ランプレセプタクル', '埋込連用スイッチ × 2', 'ジョイントボックス'],
    circuit:
      'Each switch controls one light from a single joint box. The simplest task — the one to master first.',
    traps: [
      'White must reach both lights.',
      'Both switches take the live from the same black conductor.',
      'Loop direction on the lamp receptacle.',
    ],
  },
  {
    no: 2,
    title: 'Three-way switch pair',
    titleJp: '3路スイッチ2個で1灯を点滅',
    devices: ['3路スイッチ × 2', 'ランプレセプタクル or 引掛シーリング', 'VVF 1.6-3C'],
    circuit: 'One lamp controlled from two places. The 3-core cable carries the two travellers.',
    traps: [
      'Live enters terminal 0 of the first switch; the lamp leaves terminal 0 of the second.',
      'Terminals 1 and 3 are the travellers — never cross them with terminal 0.',
    ],
  },
  {
    no: 3,
    title: 'Three-way plus four-way',
    titleJp: '3路・4路スイッチで1灯を点滅',
    devices: ['3路スイッチ × 2', '4路スイッチ', 'VVF 1.6-3C × 2'],
    circuit: 'Control from three places. The 4-way switch sits between the two travellers.',
    traps: [
      'The 4-way switch has two pairs of terminals — keep each traveller pair together.',
      'This one is easy to mis-wire under time pressure; draw the 複線図 carefully.',
    ],
  },
  {
    no: 4,
    title: 'Photoelectric switch and outdoor light',
    titleJp: '自動点滅器と屋外灯',
    devices: ['端子台（自動点滅器の代用）', '屋外灯 or ランプレセプタクル', '埋込連用スイッチ'],
    circuit:
      'The photo switch (represented by a terminal block with terminals 1-2-3) switches the outdoor lamp automatically.',
    traps: [
      'Terminal 1 = live in, 2 = load out, 3 = neutral (follow the printed diagram, not memory).',
      'The conditions usually demand specific colours at the terminal block.',
    ],
  },
  {
    no: 5,
    title: 'Time switch',
    titleJp: 'タイムスイッチと負荷',
    devices: ['端子台（タイムスイッチの代用）', '引掛シーリング', 'コンセント'],
    circuit: 'A time switch supplies a lighting load, with an outlet on the same circuit.',
    traps: [
      'The terminal block layout is given in the problem — copy it exactly.',
      'Do not forget the neutral to the time switch itself.',
    ],
  },
  {
    no: 6,
    title: 'Remote-control relays',
    titleJp: 'リモコンリレーと複数灯',
    devices: ['端子台（リモコンリレー3個の代用）', '引掛シーリング × 数個'],
    circuit: 'Three relays each feed a lighting circuit from a common live.',
    traps: [
      'Many conductors land on one terminal block — keep the colour order.',
      'Joint counts are high; plan the ring sleeve sizes in advance.',
    ],
  },
  {
    no: 7,
    title: 'Three-phase 200 V motor',
    titleJp: '三相200V回路と電動機',
    devices: [
      '端子台（電動機の代用）',
      '配線用遮断器 or 開閉器の代用端子台',
      'VVF 2.0-3C or EM-EEF',
    ],
    circuit:
      'A three-phase supply feeds a motor through a breaker. Conductor colours are specified (often 赤・白・黒).',
    traps: [
      'Phase colour order is graded — read the conditions.',
      'Earthing conductor (green) to the motor frame when required.',
    ],
  },
  {
    no: 8,
    title: '100 V and 200 V on one board',
    titleJp: '100V回路と200V回路',
    devices: ['端子台（配線用遮断器の代用）', '250Vコンセント', '引掛シーリング'],
    circuit: 'A 1φ3W supply feeds a 200 V outlet and a 100 V lighting circuit.',
    traps: [
      'The 200 V outlet takes black and red, not white.',
      'Confusing the neutral between the two circuits is an instant fail.',
    ],
  },
  {
    no: 9,
    title: 'Threadless conduit and surface outlet',
    titleJp: 'ねじなし電線管（E19）と露出形コンセント',
    devices: ['ねじなし電線管 E19', 'アウトレットボックス', '露出形コンセント', 'ボンド線'],
    circuit: 'Cable runs into a steel box through a conduit; the conduit is bonded.',
    traps: [
      'Tighten the set screw until the head snaps off.',
      'Fit the insulating bushing and connect the bonding jumper as the conditions state.',
    ],
  },
  {
    no: 10,
    title: 'PF conduit',
    titleJp: 'PF管とアウトレットボックス',
    devices: ['PF管', 'PF管用ボックスコネクタ', 'アウトレットボックス', '引掛シーリング'],
    circuit:
      'Same as the steel-conduit task but with flexible plastic conduit — no bonding needed.',
    traps: [
      'Push the connector fully home so the corrugation does not show inside the box.',
      'The locking ring must be fitted.',
    ],
  },
  {
    no: 11,
    title: 'Three devices on one frame',
    titleJp: '埋込連用器具3個（スイッチ・スイッチ・コンセント）',
    devices: ['埋込連用取付枠', 'スイッチ × 2', 'コンセント', '渡り線'],
    circuit: 'Two switches and an outlet share one frame, fed by jumper (渡り線) conductors.',
    traps: [
      'The jumpers must be the colour the conditions specify (usually black for live, white for the grounded side).',
      'Three devices fill the frame; a single device would go in the centre.',
    ],
  },
  {
    no: 12,
    title: 'Pilot lamp circuit',
    titleJp: 'パイロットランプ（常時点灯・同時点滅・異時点滅）',
    devices: ['パイロットランプ', 'スイッチ', '引掛シーリング'],
    circuit:
      'A pilot lamp shows the state of the lighting circuit in one of the three wiring styles.',
    traps: [
      'Identify which of 常時点灯 / 同時点滅 / 異時点滅 the conditions demand before cutting anything.',
    ],
  },
  {
    no: 13,
    title: 'Two boxes, mixed connectors',
    titleJp: 'ボックス2箇所・リングスリーブと差込形コネクタの併用',
    devices: [
      'アウトレットボックス',
      'ジョイントボックス',
      'リングスリーブ',
      '差込形コネクタ',
      'VVR',
    ],
    circuit:
      'A longer run with joints in two boxes; the conditions state which connector to use in which box.',
    traps: [
      'Do not swap the connector types between boxes.',
      'Round VVR cable needs careful knife work to strip without nicking the cores.',
    ],
  },
];

/**
 * Grouped from the official 「欠陥の判断基準」 published by the examination centre.
 * Millimetre values below are the commonly taught working limits; the official
 * PDF for your sitting is the authority.
 */
export const DEFECTS: Defect[] = [
  {
    id: 'incomplete',
    jp: '未完成・未接続',
    en: 'Unfinished or unconnected work',
    items: [
      'Any part of the circuit not finished when time is called.',
      'A conductor left out of a joint, or a device left unwired.',
    ],
  },
  {
    id: 'layout',
    jp: '配置・寸法・工事種別の相違',
    en: 'Wrong layout, length or method',
    items: [
      'A device placed somewhere other than the drawing shows.',
      'A cable cut so short that a section is 50 % or less of the specified length.',
      'Using a wiring method or cable type other than the one specified.',
    ],
  },
  {
    id: 'miswire',
    jp: '誤接続・誤結線',
    en: 'Wrong connections',
    items: [
      'A circuit that does not function as the drawing requires.',
      'Travellers of a 3-way switch connected to terminal 0.',
      'Switching the grounded (white) conductor instead of the live.',
    ],
  },
  {
    id: 'colour',
    jp: '電線の色別・極性の相違',
    en: 'Wrong colour or polarity',
    items: [
      'A conductor other than white on a grounded (接地側) connection.',
      'White not landed on the W terminal of an outlet or the shell terminal of a lamp receptacle.',
      'Phase colours at a three-phase terminal block in the wrong order.',
    ],
  },
  {
    id: 'damage',
    jp: '電線の損傷',
    en: 'Damaged conductor or insulation',
    items: [
      'A nick deep enough that the core would break if bent.',
      'Insulation cut or crushed by the tool.',
      'Sheath damaged where it enters a device.',
    ],
  },
  {
    id: 'sleeve',
    jp: 'リングスリーブの圧着不良',
    en: 'Ring-sleeve crimping defects',
    items: [
      'Wrong sleeve size, or wrong die mark for the conductors joined.',
      'The same sleeve crimped twice, or crimped across two positions.',
      'A conductor not pushed fully into the sleeve.',
      'Bare conductor left exposed below the sleeve, or no conductor visible above it.',
      'Insulation stripped so far back that bare copper shows outside the sleeve.',
    ],
  },
  {
    id: 'connector',
    jp: '差込形コネクタの不良',
    en: 'Push-in connector defects',
    items: [
      'Conductor not inserted to the depth line — copper visible below the connector.',
      'Insulation pushed inside the connector so the copper does not reach the contact.',
    ],
  },
  {
    id: 'device',
    jp: '器具への結線不良',
    en: 'Faulty termination at a device',
    items: [
      'Loop wound the wrong way, or insulation trapped under the screw.',
      'Screw not tight, or bare conductor protruding noticeably beyond the terminal.',
      'Cable sheath not entering the device base far enough.',
      'On a ceiling rose, core inserted past the gauge line or copper visible at the entry.',
    ],
  },
  {
    id: 'conduit',
    jp: '管工事の不良',
    en: 'Conduit defects',
    items: [
      'Threadless connector set-screw head not snapped off.',
      'Bushing missing, or the bonding jumper not connected as required.',
      'Conduit not held firmly in the box connector.',
    ],
  },
  {
    id: 'frame',
    jp: '取付枠の不良',
    en: 'Mounting-frame defects',
    items: [
      'A single device not in the centre of the frame.',
      'A device fitted upside down or not clipped in properly.',
    ],
  },
  {
    id: 'other',
    jp: 'その他',
    en: 'Other',
    items: [
      'Using materials not supplied for the task.',
      'Damaging the supplied materials so the work cannot be judged.',
    ],
  },
];

export const FUKUSENZU_STEPS = [
  {
    step: 1,
    jp: '器具を配置する',
    en: 'Place the devices',
    detail:
      'Redraw the source, the joint boxes, every lamp, switch and outlet in the same positions as the single-line diagram.',
  },
  {
    step: 2,
    jp: '接地側（白）をつなぐ',
    en: 'Run the white conductor',
    detail:
      'From the grounded side of the supply to every lamp and to the W terminal of every outlet. Never to a switch.',
  },
  {
    step: 3,
    jp: '非接地側（黒）をつなぐ',
    en: 'Run the black conductor',
    detail:
      'From the live side of the supply to every switch and to the non-W terminal of every outlet. Never straight to a switched lamp.',
  },
  {
    step: 4,
    jp: 'スイッチと負荷を結ぶ',
    en: 'Connect each switch to its load',
    detail:
      'The switch output goes to the lamp it controls. Use the remaining colour (red, or white where the conditions allow it in a 3-core cable).',
  },
  {
    step: 5,
    jp: '接続点とスリーブを決める',
    en: 'Mark the joints and pick the connectors',
    detail:
      'Circle every joint inside a box, count the conductors per run, and choose the ring sleeve size and crimp mark (or the push-in connector) for each joint.',
  },
];

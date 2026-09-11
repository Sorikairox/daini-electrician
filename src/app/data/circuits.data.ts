/**
 * Worked 単線図 → 複線図 conversions, drawn from a small declarative model so
 * the app can reveal them one step at a time.
 */

export type NodeKind = 'source' | 'box' | 'rose' | 'lamp' | 'switch' | 'outlet' | 'frame';
export type WireColour = 'white' | 'black' | 'red';

export interface CircuitNode {
  id: string;
  kind: NodeKind;
  x: number;
  y: number;
  /** Japanese label printed under the device */
  jp: string;
  /** English label */
  en: string;
  /** Small letter drawn inside the symbol (W terminal, 0/1/3 etc.) */
  badge?: string;
}

export interface CircuitEdge {
  from: string;
  to: string;
  colour: WireColour;
  /** Which reveal step introduces this conductor (2 = white, 3 = black, 4 = switch legs) */
  step: 2 | 3 | 4;
  /** Short English note shown in the step legend */
  note: string;
}

export interface Run {
  from: string;
  to: string;
  count: number;
  note: string;
}

export interface Joint {
  id: string;
  jp: string;
  en: string;
  conductors: number;
  sleeve: '小' | '中' | '大';
  mark: '○' | '小' | '中' | '大';
}

export interface Circuit {
  id: string;
  title: string;
  titleJp: string;
  summary: string;
  nodes: CircuitNode[];
  edges: CircuitEdge[];
  runs: Run[];
  joints: Joint[];
  /** Assumes every conductor is 1.6 mm unless stated */
  note: string;
}

export const STEP_LABELS = [
  { step: 1, en: 'Devices only', jp: '器具の配置' },
  { step: 2, en: 'White — grounded conductor', jp: '接地側（白）' },
  { step: 3, en: 'Black — live conductor', jp: '非接地側（黒）' },
  { step: 4, en: 'Switch legs and travellers', jp: 'スイッチと負荷' },
];

export const CIRCUITS: Circuit[] = [
  {
    id: 'basic',
    title: 'One lamp, one switch, one outlet',
    titleJp: '1灯1スイッチ＋コンセント',
    summary:
      'The building block of every task. Learn this one until you can draw it without thinking.',
    note: 'All conductors 1.6 mm.',
    nodes: [
      { id: 'src', kind: 'source', x: 70, y: 70, jp: '電源 1φ2W 100V', en: 'Supply' },
      { id: 'box', kind: 'box', x: 320, y: 170, jp: 'ジョイントボックス', en: 'Junction box' },
      {
        id: 'rose',
        kind: 'rose',
        x: 560,
        y: 70,
        jp: '引掛シーリング',
        en: 'Ceiling rose',
        badge: 'W',
      },
      { id: 'sw', kind: 'switch', x: 560, y: 290, jp: 'スイッチ', en: 'Switch' },
      { id: 'out', kind: 'outlet', x: 90, y: 290, jp: 'コンセント', en: 'Outlet', badge: 'W' },
    ],
    edges: [
      {
        from: 'src',
        to: 'box',
        colour: 'white',
        step: 2,
        note: 'Grounded conductor from the supply into the box.',
      },
      { from: 'box', to: 'rose', colour: 'white', step: 2, note: 'White straight to the lamp.' },
      {
        from: 'box',
        to: 'out',
        colour: 'white',
        step: 2,
        note: 'White to the W terminal of the outlet.',
      },
      { from: 'src', to: 'box', colour: 'black', step: 3, note: 'Live conductor from the supply.' },
      {
        from: 'box',
        to: 'sw',
        colour: 'black',
        step: 3,
        note: 'Live to the switch — never to the lamp.',
      },
      { from: 'box', to: 'out', colour: 'black', step: 3, note: 'Live to the outlet.' },
      { from: 'sw', to: 'box', colour: 'red', step: 4, note: 'Switched live back to the box.' },
      { from: 'box', to: 'rose', colour: 'red', step: 4, note: 'Switched live on to the lamp.' },
    ],
    runs: [
      { from: 'Supply', to: 'Box', count: 2, note: 'black + white' },
      { from: 'Box', to: 'Ceiling rose', count: 2, note: 'switched live + white' },
      { from: 'Box', to: 'Switch', count: 2, note: 'live in, switched live out' },
      { from: 'Box', to: 'Outlet', count: 2, note: 'black + white' },
    ],
    joints: [
      {
        id: 'j1',
        jp: '接地側（白）',
        en: 'White: supply + lamp + outlet',
        conductors: 3,
        sleeve: '小',
        mark: '小',
      },
      {
        id: 'j2',
        jp: '非接地側（黒）',
        en: 'Black: supply + switch + outlet',
        conductors: 3,
        sleeve: '小',
        mark: '小',
      },
      {
        id: 'j3',
        jp: 'スイッチの負荷側',
        en: 'Switched live: switch + lamp',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
    ],
  },
  {
    id: 'two-lamps',
    title: 'Two lamps, two switches',
    titleJp: '2灯2スイッチ',
    summary: 'Two independent lighting circuits sharing one box — watch how the joints grow.',
    note: 'All conductors 1.6 mm.',
    nodes: [
      { id: 'src', kind: 'source', x: 70, y: 70, jp: '電源 1φ2W 100V', en: 'Supply' },
      { id: 'box', kind: 'box', x: 320, y: 180, jp: 'ジョイントボックス', en: 'Junction box' },
      {
        id: 'roseA',
        kind: 'rose',
        x: 560,
        y: 60,
        jp: '引掛シーリング イ',
        en: 'Lamp A',
        badge: 'W',
      },
      {
        id: 'roseB',
        kind: 'lamp',
        x: 560,
        y: 170,
        jp: 'ランプレセプタクル ロ',
        en: 'Lamp B',
        badge: 'W',
      },
      { id: 'swA', kind: 'switch', x: 420, y: 320, jp: 'スイッチ イ', en: 'Switch A' },
      { id: 'swB', kind: 'switch', x: 560, y: 320, jp: 'スイッチ ロ', en: 'Switch B' },
    ],
    edges: [
      { from: 'src', to: 'box', colour: 'white', step: 2, note: 'White from the supply.' },
      { from: 'box', to: 'roseA', colour: 'white', step: 2, note: 'White to lamp A.' },
      { from: 'box', to: 'roseB', colour: 'white', step: 2, note: 'White to lamp B.' },
      { from: 'src', to: 'box', colour: 'black', step: 3, note: 'Live from the supply.' },
      { from: 'box', to: 'swA', colour: 'black', step: 3, note: 'Live to switch A.' },
      {
        from: 'box',
        to: 'swB',
        colour: 'black',
        step: 3,
        note: 'Live to switch B — the same black joint.',
      },
      { from: 'swA', to: 'box', colour: 'red', step: 4, note: 'Switched live A.' },
      { from: 'box', to: 'roseA', colour: 'red', step: 4, note: 'On to lamp A.' },
      { from: 'swB', to: 'box', colour: 'red', step: 4, note: 'Switched live B.' },
      { from: 'box', to: 'roseB', colour: 'red', step: 4, note: 'On to lamp B.' },
    ],
    runs: [
      { from: 'Supply', to: 'Box', count: 2, note: 'black + white' },
      { from: 'Box', to: 'Lamp A', count: 2, note: 'switched live + white' },
      { from: 'Box', to: 'Lamp B', count: 2, note: 'switched live + white' },
      { from: 'Box', to: 'Switch A', count: 2, note: 'live in, switched live out' },
      { from: 'Box', to: 'Switch B', count: 2, note: 'live in, switched live out' },
    ],
    joints: [
      {
        id: 'j1',
        jp: '接地側（白）',
        en: 'White: supply + lamp A + lamp B',
        conductors: 3,
        sleeve: '小',
        mark: '小',
      },
      {
        id: 'j2',
        jp: '非接地側（黒）',
        en: 'Black: supply + switch A + switch B',
        conductors: 3,
        sleeve: '小',
        mark: '小',
      },
      {
        id: 'j3',
        jp: 'イの負荷側',
        en: 'Switched live A: switch A + lamp A',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j4',
        jp: 'ロの負荷側',
        en: 'Switched live B: switch B + lamp B',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
    ],
  },
  {
    id: 'three-way',
    title: 'One lamp from two places (3-way switches)',
    titleJp: '3路スイッチ2個で1灯',
    summary:
      'Travellers pass through the box, so every joint here is a pair. The installation conditions allow the white core of a 3-core cable to be used as a traveller.',
    note: 'Two 3-core cables (black / white / red) carry the travellers.',
    nodes: [
      { id: 'src', kind: 'source', x: 70, y: 70, jp: '電源 1φ2W 100V', en: 'Supply' },
      { id: 'box', kind: 'box', x: 320, y: 175, jp: 'ジョイントボックス', en: 'Junction box' },
      { id: 'lamp', kind: 'rose', x: 560, y: 60, jp: '引掛シーリング', en: 'Lamp', badge: 'W' },
      {
        id: 'swA',
        kind: 'switch',
        x: 150,
        y: 320,
        jp: '3路スイッチ イ',
        en: '3-way A',
        badge: '0·1·3',
      },
      {
        id: 'swB',
        kind: 'switch',
        x: 520,
        y: 320,
        jp: '3路スイッチ ロ',
        en: '3-way B',
        badge: '0·1·3',
      },
    ],
    edges: [
      { from: 'src', to: 'box', colour: 'white', step: 2, note: 'White from the supply.' },
      { from: 'box', to: 'lamp', colour: 'white', step: 2, note: 'White straight to the lamp.' },
      { from: 'src', to: 'box', colour: 'black', step: 3, note: 'Live from the supply.' },
      {
        from: 'box',
        to: 'swA',
        colour: 'black',
        step: 3,
        note: 'Live into terminal 0 of switch A.',
      },
      {
        from: 'box',
        to: 'swA',
        colour: 'red',
        step: 4,
        note: 'Traveller 1 (terminal 1 of switch A).',
      },
      {
        from: 'box',
        to: 'swA',
        colour: 'white',
        step: 4,
        note: 'Traveller 2 (terminal 3 of switch A).',
      },
      {
        from: 'box',
        to: 'swB',
        colour: 'red',
        step: 4,
        note: 'Traveller 1 continues to switch B.',
      },
      {
        from: 'box',
        to: 'swB',
        colour: 'white',
        step: 4,
        note: 'Traveller 2 continues to switch B.',
      },
      {
        from: 'swB',
        to: 'box',
        colour: 'black',
        step: 4,
        note: 'Terminal 0 of switch B = switched live.',
      },
      { from: 'box', to: 'lamp', colour: 'black', step: 4, note: 'Switched live to the lamp.' },
    ],
    runs: [
      { from: 'Supply', to: 'Box', count: 2, note: 'black + white' },
      { from: 'Box', to: 'Switch A', count: 3, note: 'live + two travellers' },
      { from: 'Box', to: 'Switch B', count: 3, note: 'two travellers + switched live' },
      { from: 'Box', to: 'Lamp', count: 2, note: 'switched live + white' },
    ],
    joints: [
      {
        id: 'j1',
        jp: '接地側（白）',
        en: 'White: supply + lamp',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j2',
        jp: '非接地側（黒）',
        en: 'Black: supply + switch A terminal 0',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j3',
        jp: '3路の渡り 1',
        en: 'Traveller 1: switch A ↔ switch B',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j4',
        jp: '3路の渡り 2',
        en: 'Traveller 2: switch A ↔ switch B',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j5',
        jp: '負荷側',
        en: 'Switched live: switch B + lamp',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
    ],
  },
  {
    id: 'pilot',
    title: 'Pilot lamp that follows the load (同時点滅)',
    titleJp: 'スイッチ＋パイロットランプ（同時点滅）',
    summary:
      'The pilot lamp sits in parallel with the light, so the run to the device frame carries three conductors.',
    note: 'Change to 異時点滅 by moving the pilot across the switch contacts instead.',
    nodes: [
      { id: 'src', kind: 'source', x: 70, y: 70, jp: '電源 1φ2W 100V', en: 'Supply' },
      { id: 'box', kind: 'box', x: 320, y: 170, jp: 'ジョイントボックス', en: 'Junction box' },
      { id: 'lamp', kind: 'rose', x: 560, y: 60, jp: '引掛シーリング', en: 'Lamp', badge: 'W' },
      {
        id: 'frame',
        kind: 'frame',
        x: 540,
        y: 300,
        jp: 'スイッチ＋パイロットランプ',
        en: 'Switch + pilot on one frame',
      },
    ],
    edges: [
      { from: 'src', to: 'box', colour: 'white', step: 2, note: 'White from the supply.' },
      { from: 'box', to: 'lamp', colour: 'white', step: 2, note: 'White to the lamp.' },
      { from: 'box', to: 'frame', colour: 'white', step: 2, note: 'White to the pilot lamp.' },
      { from: 'src', to: 'box', colour: 'black', step: 3, note: 'Live from the supply.' },
      { from: 'box', to: 'frame', colour: 'black', step: 3, note: 'Live to the switch.' },
      {
        from: 'frame',
        to: 'box',
        colour: 'red',
        step: 4,
        note: 'Switched live out — it also feeds the pilot lamp.',
      },
      { from: 'box', to: 'lamp', colour: 'red', step: 4, note: 'Switched live to the lamp.' },
    ],
    runs: [
      { from: 'Supply', to: 'Box', count: 2, note: 'black + white' },
      { from: 'Box', to: 'Lamp', count: 2, note: 'switched live + white' },
      {
        from: 'Box',
        to: 'Switch + pilot frame',
        count: 3,
        note: 'live in, white, switched live out',
      },
    ],
    joints: [
      {
        id: 'j1',
        jp: '接地側（白）',
        en: 'White: supply + lamp + pilot',
        conductors: 3,
        sleeve: '小',
        mark: '小',
      },
      {
        id: 'j2',
        jp: '非接地側（黒）',
        en: 'Black: supply + switch',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
      {
        id: 'j3',
        jp: '負荷側',
        en: 'Switched live: frame + lamp',
        conductors: 2,
        sleeve: '小',
        mark: '○',
      },
    ],
  },
];

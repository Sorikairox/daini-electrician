import { Question } from '../../core/models';

export const PRACTICAL_QUESTIONS: Question[] = [
  {
    id: 'pr-1',
    category: 'practical',
    difficulty: 1,
    q: 'How long is the practical exam?',
    options: ['30 minutes', '40 minutes', '60 minutes', '90 minutes'],
    answer: 1,
    explain:
      '40 minutes for one of the 13 published 候補問題. Plan roughly 5 minutes for the 複線図 and 3 minutes for the final check.',
  },
  {
    id: 'pr-2',
    category: 'practical',
    difficulty: 1,
    q: 'How many defects are allowed in the practical exam?',
    qJp: '技能試験で許される欠陥の数は。',
    options: ['Zero', 'One minor defect', 'Two', 'Depends on the task'],
    answer: 0,
    explain:
      '欠陥が一つでもあれば不合格 — a single defect fails the whole task. There is no partial credit.',
  },
  {
    id: 'pr-3',
    category: 'practical',
    difficulty: 2,
    q: 'On a lamp receptacle, the conductor loop under the screw must be formed:',
    options: ['Clockwise', 'Counter-clockwise', 'Either way', 'Straight, no loop'],
    answer: 0,
    explain:
      'Clockwise (時計回り) so that tightening the screw closes the loop rather than pushing it out.',
  },
  {
    id: 'pr-4',
    category: 'practical',
    difficulty: 2,
    q: 'When a single flush device is fitted to a 3-gang mounting frame it must be placed:',
    options: ['At the top', 'In the centre', 'At the bottom', 'Anywhere'],
    answer: 1,
    explain:
      'A single device goes in the centre of the 埋込連用取付枠; two devices go top and bottom.',
  },
  {
    id: 'pr-5',
    category: 'practical',
    difficulty: 2,
    q: 'Which of these is a defect?',
    options: [
      'Crimping a ring sleeve once with the correct die',
      'Crimping the same ring sleeve twice',
      'Cutting the conductor tips flush above the sleeve',
      'Using a push-in connector where the conditions allow it',
    ],
    answer: 1,
    explain:
      'A sleeve must be crimped once only, with the correct die. Re-crimping deforms it and is a defect.',
  },
  {
    id: 'pr-6',
    category: 'practical',
    difficulty: 2,
    q: 'The set screw of a threadless conduit connector must be:',
    options: [
      'Left finger tight',
      'Tightened until the head snaps off',
      'Removed after assembly',
      'Replaced with a bolt',
    ],
    answer: 1,
    explain:
      'Snapping the head off proves the correct clamping force. Leaving it attached is a defect.',
  },
  {
    id: 'pr-7',
    category: 'practical',
    difficulty: 2,
    q: 'What colour conductor goes to the W terminal of an outlet?',
    options: ['Black', 'White', 'Red', 'Green'],
    answer: 1,
    explain:
      'W = 接地側 (grounded side) and always takes the white conductor. Reversed polarity is a defect.',
  },
  {
    id: 'pr-8',
    category: 'practical',
    difficulty: 3,
    q: 'The 施工条件 (installation conditions) sheet says 「接地側電線にはすべて白色を使用する」. What does this require?',
    options: [
      'All conductors must be white',
      'Every grounded conductor must be white',
      'The earthing conductor must be white',
      'The live conductor must be white',
    ],
    answer: 1,
    explain:
      'Every 接地側 (grounded / neutral) conductor must be white. The live conductors stay black or red.',
  },
  {
    id: 'pr-9',
    category: 'practical',
    difficulty: 2,
    q: 'What must be fitted where a cable enters an outlet box through a knockout?',
    options: ['ゴムブッシング', 'リングスリーブ', 'サドル', 'ロックナット'],
    answer: 0,
    explain: 'A rubber bushing. Missing it is a listed defect.',
  },
  {
    id: 'pr-10',
    category: 'practical',
    difficulty: 2,
    q: 'How many candidate problems are published before the practical exam?',
    options: ['5', '10', '13', '20'],
    answer: 2,
    explain:
      '13 候補問題 are published in advance (usually in January for that year), and one of them is set at your sitting.',
  },
];

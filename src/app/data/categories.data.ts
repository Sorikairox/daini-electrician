import { Category } from '../core/models';

/**
 * The seven subject areas of the 学科試験 (written exam) plus the practical exam
 * and the administrative "how the exam works" section.
 */
export const CATEGORIES: Category[] = [
  {
    id: 'theory',
    en: 'Basic electrical theory',
    jp: '電気に関する基礎理論',
    kana: 'でんきにかんするきそりろん',
    questionShare: '≈5 of 50',
    blurb: 'Ohm’s law, resistance, power, heat, AC, impedance, power factor, three-phase.',
    color: '#3b82f6',
    icon: 'Ω',
  },
  {
    id: 'wiring-design',
    en: 'Distribution theory & wiring design',
    jp: '配電理論及び配線設計',
    kana: 'はいでんりろんおよびはいせんせっけい',
    questionShare: '≈6 of 50',
    blurb: 'Voltage drop, line loss, ampacity, main feeders, branch circuits, breaker sizing.',
    color: '#8b5cf6',
    icon: '⌁',
  },
  {
    id: 'equipment',
    en: 'Equipment, devices, materials & tools',
    jp: '電気機器・配線器具・材料・工具',
    kana: 'でんきききはいせんきぐざいりょうこうぐ',
    questionShare: '≈7 of 50',
    blurb:
      'Motors, lamps, switches, outlets, breakers, cables, conduits and the tools that cut them.',
    color: '#f59e0b',
    icon: '⚙',
  },
  {
    id: 'installation',
    en: 'Installation methods',
    jp: '電気工事の施工方法',
    kana: 'でんきこうじのせこうほうほう',
    questionShare: '≈5 of 50',
    blurb: 'Which wiring method is allowed where, support spacing, earthing, joints in boxes.',
    color: '#10b981',
    icon: '🔧',
  },
  {
    id: 'inspection',
    en: 'Inspection & measurement',
    jp: '一般用電気工作物の検査方法',
    kana: 'いっぱんようでんきこうさくぶつのけんさほうほう',
    questionShare: '≈4 of 50',
    blurb: 'Commissioning order, insulation resistance, earth resistance, meters and testers.',
    color: '#06b6d4',
    icon: '🔍',
  },
  {
    id: 'diagrams',
    en: 'Reading wiring diagrams',
    jp: '配線図',
    kana: 'はいせんず',
    questionShare: '≈20 of 50',
    blurb: 'The biggest section: JIS symbols, minimum wire counts, ring sleeve sizing, photo ID.',
    color: '#ef4444',
    icon: '▦',
  },
  {
    id: 'law',
    en: 'Laws & regulations',
    jp: '電気工作物の保安に関する法令',
    kana: 'でんきこうさくぶつのほあんにかんするほうれい',
    questionShare: '≈3 of 50',
    blurb:
      'Electricity Business Act, Electrician Act, Electrical Appliance Safety Act, contractor law.',
    color: '#64748b',
    icon: '§',
  },
  {
    id: 'practical',
    en: 'Practical (hands-on) exam',
    jp: '技能試験',
    kana: 'ぎのうしけん',
    questionShare: '40 minutes, 1 task',
    blurb: 'The 13 published candidate tasks, single-line → wiring conversion, and defect rules.',
    color: '#ec4899',
    icon: '✂',
  },
  {
    id: 'exam',
    en: 'How the exam works',
    jp: '試験の仕組み',
    kana: 'しけんのしくみ',
    questionShare: 'Admin',
    blurb: 'Schedule, fees, CBT vs paper, pass marks, and how to get the licence card afterwards.',
    color: '#0ea5e9',
    icon: '📋',
  },
];

export const CATEGORY_MAP = new Map(CATEGORIES.map((c) => [c.id, c]));

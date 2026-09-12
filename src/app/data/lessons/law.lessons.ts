import { Lesson } from '../../core/models';

export const LAW_LESSONS: Lesson[] = [
  {
    id: 'installation-categories',
    category: 'law',
    title: 'Electricity Business Act: installation categories',
    titleJp: '電気事業法と電気工作物の区分',
    minutes: 9,
    summary: 'What counts as a 一般用電気工作物 — the boundary of your future licence.',
    blocks: [
      {
        kind: 'terms',
        terms: [
          {
            jp: '電気工作物',
            explain:
              'The legal umbrella term for electrical installations and equipment of every size, from a house to a power station. The law sorts it into categories, and the category decides who may work on it.',
            kana: 'でんきこうさくぶつ',
            romaji: 'denki kōsakubutsu',
            en: 'electrical installation / works',
            category: 'law',
          },
          {
            jp: '一般用電気工作物',
            kana: 'いっぱんようでんきこうさくぶつ',
            romaji: 'ippan-yō denki kōsakubutsu',
            en: 'general (domestic) installation',
            category: 'law',
          },
          {
            jp: '事業用電気工作物',
            explain:
              'Installations that are not domestic in scale: anything with a high-voltage intake, plus certain generating plant. Outside the reach of a second-class licence.',
            kana: 'じぎょうようでんきこうさくぶつ',
            romaji: 'jigyō-yō denki kōsakubutsu',
            en: 'business-use installation',
            category: 'law',
          },
          {
            jp: '自家用電気工作物',
            kana: 'じかようでんきこうさくぶつ',
            romaji: 'jikayō denki kōsakubutsu',
            en: 'privately-owned installation (HV)',
            category: 'law',
          },
          {
            jp: '受電',
            explain:
              'Taking the supply in from the utility, at a stated voltage. Whether you receive at 600 V or less is exactly what decides the category of the installation.',
            kana: 'じゅでん',
            romaji: 'juden',
            en: 'to receive power (at a stated voltage)',
            category: 'law',
          },
        ],
      },
      {
        kind: 'p',
        text: 'A 一般用電気工作物 is an installation that receives power at 600 V or less and stays within the premises — ordinary houses, small shops and small offices. That is exactly the scope a second-class electrician may work on.',
      },
      {
        kind: 'list',
        items: [
          'Small generating equipment on the same premises can stay inside the 一般用 category, e.g. solar PV under 10 kW, internal-combustion or fuel-cell generation under 10 kW, hydro under 20 kW (small scale, no dam).',
          'Since the 2023 revision, solar PV of 10 kW up to 50 kW and wind under 20 kW are 小規模事業用電気工作物 — a sub-class of 事業用, not 一般用.',
          'Anything receiving at high voltage (over 600 V) is 自家用電気工作物 and needs a first-class licence, or a 認定電気工事従事者 certificate for its low-voltage parts.',
          'The supplying utility must periodically inspect 一般用電気工作物 (調査義務).',
        ],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'The numbers move',
        text: 'The small-generation thresholds have been revised more than once. Confirm the current wording on the 電気技術者試験センター site or a current-year textbook before your sitting.',
      },
    ],
  },
  {
    id: 'electricians-act',
    category: 'law',
    title: 'Electricians Act: what you may do',
    titleJp: '電気工事士法：作業範囲と義務',
    minutes: 10,
    summary: 'Licence scope, duties, and the work that needs no licence at all.',
    blocks: [
      {
        kind: 'table',
        head: ['Licence', 'Japanese', 'Scope'],
        rows: [
          ['2nd class', '第二種電気工事士', '一般用電気工作物 (≤ 600 V premises).'],
          ['1st class', '第一種電気工事士', 'Above, plus 自家用 up to 500 kW demand.'],
          [
            'Certified worker',
            '認定電気工事従事者',
            'LV parts (≤ 600 V) of a 自家用 installation.',
          ],
          ['Special worker', '特種電気工事資格者', 'Neon or emergency generator work.'],
        ],
      },
      { kind: 'h', text: 'Duties of a licence holder', jp: '電気工事士の義務' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Follow the technical standards (電気設備技術基準に適合させる).',
          'Carry the licence card while working (免状を携帯する).',
          'Use only materials that comply with the Electrical Appliance and Material Safety Act.',
          'Report to the Minister if required (報告の義務).',
          'A lost or damaged card is reissued by the prefectural governor who issued it; a change of name must be notified.',
        ],
      },
      { kind: 'h', text: 'Work that needs no licence', jp: '軽微な工事' },
      {
        kind: 'list',
        items: [
          'Attaching a plug, socket or lamp holder to a flexible cord (差込みプラグ・ソケット等の取付け).',
          'Bell and intercom wiring on the secondary side of a bell transformer — a 小勢力回路 of 60 V or less.',
          'Erecting poles, cross-arms or supports for overhead wires.',
          'Building underground ducts for cables.',
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Distinguish 軽微な工事 from 軽微な作業',
        text: '軽微な工事 is not “electrical work” at all. 軽微な作業 	is part of electrical work but is exempt from the licence requirement — for example screwing a conductor onto the terminal of a ≤ 600 V appliance (not a wiring device), or pulling cable into a protective duct.',
      },
    ],
  },
  {
    id: 'pse-and-contractors',
    category: 'law',
    title: 'PSE marks and the contractor law',
    titleJp: '電気用品安全法と電気工事業法',
    minutes: 8,
    summary:
      'Which mark goes on which product, and what a registered contractor must keep in the office.',
    blocks: [
      { kind: 'h', text: 'Electrical Appliance and Material Safety Act', jp: '電気用品安全法' },
      {
        kind: 'table',
        head: ['Category', 'Mark', 'Examples'],
        rows: [
          [
            '特定電気用品',
            '◇ (diamond) PS E',
            'Cables and cords (≤ 100 mm²), fuses, MCBs ≤ 100 A, RCDs, outlets, plugs, portable generators.',
          ],
          [
            '特定電気用品以外の電気用品',
            '○ (circle) PS E',
            'Fluorescent and LED luminaires, ventilating fans, conduit, cable boxes, switches for fixed wiring.',
          ],
        ],
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'Memory hook',
        text: 'Things that carry fault current or get plugged and unplugged are 特定 (diamond). Things that merely house or hold wiring are 特定以外 (circle). 「〈PS〉E」 may also be printed in place of the diamond.',
      },
      { kind: 'h', text: 'Electrical contractor law', jp: '電気工事業法' },
      {
        kind: 'list',
        items: [
          'Each business office must appoint a 主任電気工事士: a first-class holder, or a second-class holder with three years of practical experience.',
          'The office must keep an insulation tester (絶縁抵抗計), an earth tester (接地抵抗計) and a multimeter (回路計) that measures resistance and AC voltage.',
          'A sign (標識) must be displayed at each office and work site.',
          'Records (帳簿) of work performed must be kept for five years.',
        ],
      },
    ],
  },
];

import { Question } from '../../core/models';

export const LAW_QUESTIONS: Question[] = [
  {
    id: 'lw-1',
    category: 'law',
    difficulty: 1,
    q: 'A 第二種電気工事士 may work on:',
    qJp: '第二種電気工事士が従事できる工事は。',
    options: [
      '一般用電気工作物等',
      '最大電力500kWの自家用電気工作物',
      '高圧受電設備',
      'すべての電気工作物',
    ],
    answer: 0,
    explain:
      'Second class covers general (domestic) installations supplied at 600 V or less. First class adds 自家用 up to 500 kW.',
  },
  {
    id: 'lw-2',
    category: 'law',
    difficulty: 2,
    q: 'Which of these is NOT electrical work requiring a licence (軽微な工事)?',
    options: [
      '道具を使って電線相互を接続する',
      '差込みプラグをコードに取り付ける',
      '配線器具を造営材に取り付ける',
      '電線管を造営材に固定する',
    ],
    answer: 1,
    explain:
      'Fitting a plug or socket to a flexible cord is 軽微な工事 — not electrical work at all. Joining conductors always needs a licence.',
  },
  {
    id: 'lw-3',
    category: 'law',
    difficulty: 2,
    q: 'Who issues the electrician’s licence card (免状)?',
    options: ['経済産業大臣', '都道府県知事', '電気技術者試験センター', '市町村長'],
    answer: 1,
    explain: 'The prefectural governor issues the 免状. The examination centre only runs the exam.',
  },
  {
    id: 'lw-4',
    category: 'law',
    difficulty: 2,
    q: 'Which duty does the Electricians Act place on a licence holder?',
    options: [
      '作業中は免状を携帯する',
      '毎年講習を受ける',
      '住所を毎年届け出る',
      '工具を指定業者から買う',
    ],
    answer: 0,
    explain:
      '免状の携帯義務 — you must carry the card while doing electrical work, and comply with the technical standards.',
  },
  {
    id: 'lw-5',
    category: 'law',
    difficulty: 2,
    q: 'Which item carries the diamond ◇ PSE mark (特定電気用品)?',
    options: ['蛍光灯器具', '換気扇', '定格100A以下の配線用遮断器', '電線管'],
    answer: 2,
    explain:
      'Breakers, RCDs, outlets, plugs, cords and cables are 特定電気用品 (diamond). Luminaires, fans and conduit are 特定以外 (circle).',
  },
  {
    id: 'lw-6',
    category: 'law',
    difficulty: 2,
    q: 'A 一般用電気工作物 receives power at:',
    options: ['600 V or less', '6600 V', '7000 V or less', 'Any voltage'],
    answer: 0,
    explain:
      'Low-voltage supply, 600 V or less, within the premises. Above that it becomes 自家用電気工作物.',
  },
  {
    id: 'lw-7',
    category: 'law',
    difficulty: 3,
    q: 'A second-class electrician who wants to work on the low-voltage part of a high-voltage customer’s installation needs:',
    options: [
      '第一種電気工事士免状だけ',
      '認定電気工事従事者認定証',
      '特種電気工事資格者認定証',
      '何も必要ない',
    ],
    answer: 1,
    explain: '認定電気工事従事者認定証 allows work on the ≤ 600 V parts of a 自家用電気工作物.',
  },
  {
    id: 'lw-8',
    category: 'law',
    difficulty: 2,
    q: 'A registered electrical contractor must keep work records (帳簿) for:',
    options: ['1 year', '3 years', '5 years', '10 years'],
    answer: 2,
    explain:
      'Five years under the 電気工事業法, along with the required instruments and the office sign (標識).',
  },
  {
    id: 'lw-9',
    category: 'law',
    difficulty: 3,
    q: 'To be a 主任電気工事士, a second-class holder must have:',
    options: [
      'No extra requirement',
      '1 year of experience',
      '3 years of practical experience',
      '5 years of practical experience',
    ],
    answer: 2,
    explain: 'Three years of practical experience — or hold a first-class licence.',
  },
  {
    id: 'lw-10',
    category: 'law',
    difficulty: 2,
    q: 'Bell or intercom wiring on the secondary side of a bell transformer is exempt because it is:',
    options: ['小勢力回路', '高圧回路', '非常用回路', '接地回路'],
    answer: 0,
    explain: 'A 小勢力回路 is limited to 60 V or less and is treated as 軽微な工事.',
  },
  {
    id: 'lw-11',
    category: 'law',
    difficulty: 2,
    q: 'Which law defines the categories of electrical installations (電気工作物)?',
    options: ['電気事業法', '電気工事士法', '電気用品安全法', '建築基準法'],
    answer: 0,
    explain:
      '電気事業法 defines 一般用 / 事業用 / 自家用. 電気工事士法 defines who may work on them.',
  },
  {
    id: 'lw-12',
    category: 'law',
    difficulty: 3,
    q: 'Which of the following is treated as a 一般用電気工作物 when installed on the same premises?',
    options: [
      '出力50kWの太陽電池発電設備',
      '出力10kW未満の太陽電池発電設備',
      '出力30kWの風力発電設備',
      '高圧受電の需要家',
    ],
    answer: 1,
    explain:
      'Solar PV under 10 kW stays in the 一般用 category. Since the 2023 revision, 10–50 kW PV is 小規模事業用電気工作物. Always confirm the current threshold before your sitting.',
  },
];

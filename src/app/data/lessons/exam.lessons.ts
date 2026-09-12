import { Lesson } from '../../core/models';

export const EXAM_LESSONS: Lesson[] = [
  {
    id: 'exam-overview',
    category: 'exam',
    title: 'How the exam is run',
    titleJp: '試験の概要',
    minutes: 8,
    summary:
      'Two stages, two sittings a year, no prerequisites — and what to check before you apply.',
    blocks: [
      {
        kind: 'list',
        items: [
          'The exam is run by the 電気技術者試験センター (ECEE). Anyone may apply — no age limit, no experience requirement, no Japanese-language requirement.',
          'Stage 1 is the 学科試験 (written): 50 four-choice questions, 120 minutes, available either as CBT at a test centre or as a paper sitting.',
          'The pass mark is around 60 % — 30 of 50 — and is confirmed for each sitting.',
          'Stage 2 is the 技能試験 (practical): one of 13 published candidate problems, 40 minutes, judged pass/fail against the official defect criteria.',
          'There are two sittings a year, 上期 (first half) and 下期 (second half). Applications open a few months ahead.',
          'Pass the written exam and fail the practical, and you may be exempted from the written paper at the next sitting — check the current exemption rule when you apply.',
          'After passing both, you apply to the prefectural governor for the 免状 (licence card); a fee and a photo are required.',
        ],
      },
      {
        kind: 'callout',
        tone: 'warn',
        title: 'Always verify dates and fees',
        text: 'Dates, fees and application methods change every year. This app deliberately gives no specific dates — confirm them on the ECEE website (shiken.or.jp) for your sitting.',
      },
      { kind: 'h', text: 'Exam Japanese survival kit', jp: '試験で出る指示語' },
      {
        kind: 'terms',
        terms: [
          {
            jp: '次のうち',
            explain:
              'Among the following. The standard phrase introducing the four answer choices.',
            kana: 'つぎのうち',
            romaji: 'tsugi no uchi',
            en: 'among the following',
            category: 'exam',
          },
          {
            jp: '正しいものは',
            explain: 'Which one is correct. A straightforward question — find the true statement.',
            kana: 'ただしいものは',
            romaji: 'tadashii mono wa',
            en: 'which is correct',
            category: 'exam',
          },
          {
            jp: '誤っているものは',
            explain:
              'Which one is WRONG. About a third of the paper asks this way, and missing the word costs you the mark even when you know the subject perfectly.',
            kana: 'あやまっているものは',
            romaji: 'ayamatte iru mono wa',
            en: 'which is INCORRECT',
            note: 'Miss this word and you lose the mark.',
            category: 'exam',
          },
          {
            jp: '不適切なものは',
            explain:
              'Which one is unsuitable or improper. The same trap as 誤っているもの: you are hunting the bad answer, not the good one.',
            kana: 'ふてきせつなものは',
            romaji: 'futekisetsu na mono wa',
            en: 'which is inappropriate',
            category: 'exam',
          },
          {
            jp: '最も',
            explain:
              'Most. Usually in 最も適切なもの, the most appropriate — a hint that several answers are defensible and you want the best of them.',
            kana: 'もっとも',
            romaji: 'mottomo',
            en: 'most (e.g. most appropriate)',
            category: 'exam',
          },
          {
            jp: '組合せ',
            explain:
              'Combination. The answer is a set of items together, so every part of the option you choose has to be right.',
            kana: 'くみあわせ',
            romaji: 'kumiawase',
            en: 'combination',
            category: 'exam',
          },
          {
            jp: '施設できない',
            explain:
              'May not be installed. The question is asking where a method is forbidden, rather than where it is allowed.',
            kana: 'しせつできない',
            romaji: 'shisetsu dekinai',
            en: 'may not be installed',
            category: 'exam',
          },
          {
            jp: 'ただし',
            explain:
              'However, or provided that. It introduces the assumption you must apply, and it often overturns what the first sentence implied — so never stop reading at the first full stop.',
            kana: 'ただし',
            romaji: 'tadashi',
            en: 'however / provided that',
            note: 'Introduces the assumption you must use.',
            category: 'exam',
          },
        ],
      },
      {
        kind: 'callout',
        tone: 'exam',
        title: 'Highlight the negative',
        text: 'Roughly a third of the questions ask for the WRONG statement (誤っているもの / 不適切なもの). On the CBT screen, read the last five characters of the question before the choices.',
      },
    ],
  },
  {
    id: 'study-plan',
    category: 'exam',
    title: 'An eight-week study plan',
    titleJp: '8週間の学習計画',
    minutes: 6,
    summary: 'A realistic order for a non-native speaker with a job.',
    blocks: [
      {
        kind: 'table',
        head: ['Week', 'Focus', 'In this app'],
        rows: [
          ['1', 'Vocabulary + how the exam works', 'Glossary, Exam lessons, flashcards 15 min/day'],
          ['2', 'Basic theory and calculations', 'Theory lessons + practice quiz by category'],
          ['3', 'Distribution and wiring design', 'Design lessons, formula sheet'],
          ['4', 'Equipment, materials, tools', 'Equipment lessons + symbol drill'],
          ['5', 'Installation methods and earthing', 'Installation lessons, numbers drill'],
          ['6', 'Inspection + law', 'Inspection and Law lessons'],
          ['7', 'Wiring diagrams — the 20-mark section', 'Symbols page + 複線図 practice daily'],
          ['8', 'Mock exams and weak spots', 'Mock exam mode, review wrong answers'],
        ],
      },
      {
        kind: 'p',
        text: 'Start the practical exam practice as soon as the written exam is behind you — the gap between the two stages is short. Build all 13 candidate problems; aim to finish any of them in 30 minutes with a clean inspection.',
      },
      {
        kind: 'callout',
        tone: 'tip',
        title: 'For an N3 learner',
        text: 'Read each lesson in English first, then cover the English and read only the Japanese keywords. Exam questions are written in plain technical Japanese with very few kanji you have not already met in this app’s glossary.',
      },
    ],
  },
];

/**
 * Shared data model for the 第二種電気工事士 (Second-Class Electrician) study app.
 * Every piece of content pairs an English explanation with the Japanese wording
 * that actually appears on the exam paper.
 */

/** A Japanese term the learner must be able to recognise on the exam paper. */
export interface Term {
  /** Japanese as printed on the exam, e.g. 接地工事 */
  jp: string;
  /** Reading in hiragana/katakana, e.g. せっちこうじ */
  kana: string;
  /** Romaji, e.g. setchi kouji */
  romaji: string;
  /** Plain-English meaning */
  en: string;
  /** Optional extra note / mnemonic / gotcha, in English */
  note?: string;
  /** Category id used for filtering (see CATEGORIES) */
  category: CategoryId;
}

export type CategoryId =
  | 'theory'
  | 'wiring-design'
  | 'equipment'
  | 'installation'
  | 'inspection'
  | 'diagrams'
  | 'law'
  | 'practical'
  | 'exam';

export interface Category {
  id: CategoryId;
  /** English name */
  en: string;
  /** Japanese name as used by the exam syllabus */
  jp: string;
  kana: string;
  /** Approximate number of questions on the 50-question written paper */
  questionShare: string;
  /** One-line English summary */
  blurb: string;
  /** Accent colour (CSS custom property value) */
  color: string;
  icon: string;
}

/* ------------------------------------------------------------------ lessons */

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h'; text: string; jp?: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'terms'; terms: Term[] }
  | { kind: 'formula'; latexish: string; caption: string; where?: string[] }
  | { kind: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { kind: 'callout'; tone: 'tip' | 'warn' | 'exam'; title: string; text: string }
  | { kind: 'example'; question: string; steps: string[]; answer: string };

export interface Lesson {
  id: string;
  category: CategoryId;
  /** English title */
  title: string;
  /** Japanese title (exam wording) */
  titleJp: string;
  /** Estimated reading time in minutes */
  minutes: number;
  /** One sentence of English, shown in the list */
  summary: string;
  blocks: Block[];
}

/* -------------------------------------------------------------------- quiz */

export interface Question {
  id: string;
  category: CategoryId;
  /** English question text */
  q: string;
  /** Optional Japanese phrasing of the same question (as it may appear) */
  qJp?: string;
  options: string[];
  /** Index into options */
  answer: number;
  /** English explanation shown after answering */
  explain: string;
  /** Japanese keywords worth memorising for this question */
  keywords?: Term[];
  difficulty: 1 | 2 | 3;
}

/* ----------------------------------------------------------------- symbols */

export interface DiagramSymbol {
  id: string;
  /** Japanese name printed on the 配線図 */
  jp: string;
  kana: string;
  romaji: string;
  /** English name */
  en: string;
  /** What it means / how it is used, English */
  note: string;
  group: 'lighting' | 'outlet' | 'switch' | 'panel' | 'wiring' | 'other';
  /** Inline SVG body, drawn on a 0 0 100 100 viewBox */
  svg: string;
  /** Letters/numbers written next to the symbol on the drawing */
  marks?: { mark: string; meaning: string; jp: string }[];
}

/* ---------------------------------------------------------------- practical */

export interface ToolItem {
  id: string;
  jp: string;
  kana: string;
  romaji: string;
  en: string;
  use: string;
  required: boolean;
  group: 'basic' | 'measuring' | 'conduit' | 'other';
}

export interface CandidateProblem {
  no: number;
  /** English nickname for the archetype */
  title: string;
  titleJp: string;
  /** Devices that normally appear */
  devices: string[];
  /** English description of what the wiring does */
  circuit: string;
  /** Traps that cost people the exam */
  traps: string[];
}

export interface Defect {
  id: string;
  /** Japanese category from the official 欠陥の判断基準 */
  jp: string;
  en: string;
  items: string[];
}

/* --------------------------------------------------------------- formulas */

export interface Formula {
  id: string;
  title: string;
  titleJp: string;
  expression: string;
  where: string[];
  note: string;
  category: CategoryId;
}

/* --------------------------------------------------------------- progress */

export interface QuizAttempt {
  at: number;
  mode: 'practice' | 'mock';
  category: CategoryId | 'all';
  correct: number;
  total: number;
}

/** Leitner box (1 = new / wrong, 5 = mastered). */
export type Box = 1 | 2 | 3 | 4 | 5;

export interface CardState {
  box: Box;
  /** epoch ms of the next time this card should be shown */
  due: number;
  seen: number;
  correct: number;
}

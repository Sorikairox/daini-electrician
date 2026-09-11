# Daini Denki — 第二種電気工事士 study app

An offline-first study app for Japan's **Second-Class Electrician** licence
(第二種電気工事士), written for someone who reads English comfortably and Japanese
at about JLPT N3.

Every explanation is in English; every term, label and exam phrase is given in
Japanese with its kana reading and romaji, because the exam paper itself is in
Japanese.

## What's inside

| Section         | Japanese         | What it does                                                                                                              |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Dashboard       | ホーム           | Progress, streak, syllabus map, next lesson                                                                               |
| Lessons         | 学習             | 30 lessons across the 7 written-exam subjects, plus the practical exam and exam admin                                     |
| Flashcards      | 単語カード       | 203 exam terms in a 5-box Leitner system, both directions, with offline pronunciation                                     |
| Practice quiz   | 練習問題         | 126 questions with English explanations; filter by topic or by what you got wrong                                         |
| Mock exam       | 模擬試験         | 50 questions in 120 minutes, mixed in the real proportions, scored by section                                             |
| Diagram trainer | 複線図トレーナー | Four circuits revealed step by step (devices → white → black → switch legs), then conductor counts and ring-sleeve sizing |
| Symbols         | 図記号           | ~40 wiring-plan symbols drawn as SVG, with their letter marks, plus a hide-the-answer quiz mode                           |
| Glossary        | 用語集           | Searchable in English, Japanese or romaji ("setchi", "せっち" and "earthing" all find 接地工事)                           |
| Formulas        | 公式集           | Every calculation on the paper, plus the numbers worth memorising                                                         |
| Practical       | 技能試験         | The 5-step wiring method, the 13 candidate-task archetypes, the tool kit and the defect list                              |

## Offline and private

- Angular service worker prefetches the whole app, so after the first load it
  runs with no connection at all. Install it from the browser (“Install app”, or
  Share → Add to Home Screen on iOS).
- All progress — lessons read, flashcard boxes, quiz history — lives in
  `localStorage` in your own browser. Nothing is uploaded anywhere; there is no
  backend and no analytics.
- Pronunciation uses the browser's built-in `SpeechSynthesis` voice, which also
  works without a connection once a Japanese voice is installed on the device.

## Running it

```bash
npm install
npm start          # dev server on http://localhost:4200
npm run build      # production build into dist/
npm test           # unit tests (vitest)
```

The service worker only runs in a production build, so test offline behaviour
with `npm run build` and a static server over the `dist/daini-electrician/browser`
folder.

## Tech

Angular 21, standalone components, zoneless change detection and signals
throughout (`signal`, `computed`, `effect`, `input`). No state-management library,
no UI framework, no network calls. Content lives in typed data files under
`src/app/data/` so it can be reviewed and extended like code:

```
src/app/
  core/      models, signal stores (progress, settings), search, quiz helpers
  data/      glossary, lessons, questions, symbols, circuits, formulas, practical
  shared/    Japanese term card, lesson block renderer
  features/  one lazy-loaded route per section
```

## About the content

This is study material, not a legal reference. Exam dates, fees, the small-scale
generation thresholds, and the official 欠陥の判断基準 (defect criteria) are revised
regularly — confirm everything against the
[電気技術者試験センター (ECEE)](https://www.shiken.or.jp/) publications and a
current-year textbook before your sitting. The 13 candidate problems are
republished every year; this app teaches the recurring archetypes, not the
official list for any particular sitting.

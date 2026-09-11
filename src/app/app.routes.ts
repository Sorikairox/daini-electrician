import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'dashboard',
    title: 'Dashboard — Daini Denki',
    loadComponent: () => import('./features/dashboard/dashboard').then((m) => m.DashboardComponent),
  },
  {
    path: 'lessons',
    title: 'Lessons — Daini Denki',
    loadComponent: () =>
      import('./features/lessons/lesson-list').then((m) => m.LessonListComponent),
  },
  {
    path: 'lessons/:id',
    loadComponent: () =>
      import('./features/lessons/lesson-detail').then((m) => m.LessonDetailComponent),
  },
  {
    path: 'flashcards',
    title: 'Flashcards — Daini Denki',
    loadComponent: () =>
      import('./features/flashcards/flashcards').then((m) => m.FlashcardsComponent),
  },
  {
    path: 'quiz',
    title: 'Practice quiz — Daini Denki',
    loadComponent: () => import('./features/quiz/quiz').then((m) => m.QuizComponent),
  },
  {
    path: 'exam',
    title: 'Mock exam — Daini Denki',
    loadComponent: () => import('./features/exam/mock-exam').then((m) => m.MockExamComponent),
  },
  {
    path: 'trainer',
    title: 'Wiring diagram trainer \u2014 Daini Denki',
    loadComponent: () => import('./features/trainer/trainer').then((m) => m.TrainerComponent),
  },
  {
    path: 'symbols',
    title: 'Wiring symbols — Daini Denki',
    loadComponent: () => import('./features/symbols/symbols').then((m) => m.SymbolsComponent),
  },
  {
    path: 'glossary',
    title: 'Glossary — Daini Denki',
    loadComponent: () => import('./features/glossary/glossary').then((m) => m.GlossaryComponent),
  },
  {
    path: 'formulas',
    title: 'Formula sheet — Daini Denki',
    loadComponent: () => import('./features/formulas/formulas').then((m) => m.FormulasComponent),
  },
  {
    path: 'practical',
    title: 'Practical exam — Daini Denki',
    loadComponent: () => import('./features/practical/practical').then((m) => m.PracticalComponent),
  },
  {
    path: 'settings',
    title: 'Settings — Daini Denki',
    loadComponent: () => import('./features/settings/settings').then((m) => m.SettingsComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];

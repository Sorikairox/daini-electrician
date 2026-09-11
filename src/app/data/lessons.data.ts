import { Lesson } from '../core/models';
import { THEORY_LESSONS } from './lessons/theory.lessons';
import { DESIGN_LESSONS } from './lessons/design.lessons';
import { EQUIPMENT_LESSONS } from './lessons/equipment.lessons';
import { INSTALL_LESSONS } from './lessons/install.lessons';
import { INSPECTION_LESSONS } from './lessons/inspection.lessons';
import { DIAGRAM_LESSONS } from './lessons/diagram.lessons';
import { LAW_LESSONS } from './lessons/law.lessons';
import { PRACTICAL_LESSONS } from './lessons/practical.lessons';
import { EXAM_LESSONS } from './lessons/exam.lessons';

export const LESSONS: Lesson[] = [
  ...EXAM_LESSONS,
  ...THEORY_LESSONS,
  ...DESIGN_LESSONS,
  ...EQUIPMENT_LESSONS,
  ...INSTALL_LESSONS,
  ...INSPECTION_LESSONS,
  ...DIAGRAM_LESSONS,
  ...LAW_LESSONS,
  ...PRACTICAL_LESSONS,
];

export const LESSON_MAP = new Map(LESSONS.map((l) => [l.id, l]));

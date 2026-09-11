import { Question } from '../core/models';
import { THEORY_QUESTIONS } from './questions/theory.q';
import { DESIGN_QUESTIONS } from './questions/design.q';
import { EQUIPMENT_QUESTIONS } from './questions/equipment.q';
import { INSTALL_QUESTIONS } from './questions/install.q';
import { INSPECTION_QUESTIONS } from './questions/inspection.q';
import { DIAGRAM_QUESTIONS } from './questions/diagram.q';
import { LAW_QUESTIONS } from './questions/law.q';
import { PRACTICAL_QUESTIONS } from './questions/practical.q';

export const QUESTIONS: Question[] = [
  ...THEORY_QUESTIONS,
  ...DESIGN_QUESTIONS,
  ...EQUIPMENT_QUESTIONS,
  ...INSTALL_QUESTIONS,
  ...INSPECTION_QUESTIONS,
  ...DIAGRAM_QUESTIONS,
  ...LAW_QUESTIONS,
  ...PRACTICAL_QUESTIONS,
];

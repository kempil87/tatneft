import { Answer } from '../types/test.ts';

export function hasMultipleAnswers(list: Answer[]) {
  let count = 0;

  for (const answer of list) {
    if (answer.correct) count++;
  }

  return count > 1;
}

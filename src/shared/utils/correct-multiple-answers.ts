import { Answer } from '../types/test.ts';

export const correctMultipleAnswers = (answers?: Answer[]) => {
  if (!answers) return false;

  const correctCount = answers.reduce((acc, answer) => {
    if (answer.correct) {
      acc++;
    }

    return acc;
  }, 0);

  return correctCount / answers.length >= 0.5;
};

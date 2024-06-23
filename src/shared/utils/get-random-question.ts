import { TEST_DATA_LIST } from '../constants/mocks.ts';
import { TestModel } from '../types/test.ts';

export const getRandomQuestion = (): TestModel[] => {
  const questions: TestModel[] = [];

  for (const elem of TEST_DATA_LIST) {
    const answers = elem.answers;
    const randomNumber = randomNum(answers.length - 1);

    [answers[0], answers[randomNumber]] = [answers[randomNumber], answers[0]];

    questions.push({ ...elem, answers });
  }

  return questions;
};

function randomNum(max) {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
}

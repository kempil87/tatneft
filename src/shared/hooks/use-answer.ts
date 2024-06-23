import { useParams } from 'react-router-dom';

import { LSKeys } from '../types/ls-keys.ts';
import { Answer } from '../types/test.ts';
import { useLocalStorage } from './use-local-storage.ts';

export const useAnswer = () => {
  const { id } = useParams();
  const [answers, updateAnswers] = useLocalStorage<
    Record<string, Record<string, Answer | Answer[]>>
  >({
    key: LSKeys.answers,
    withParse: true,
  });

  return { answers, currentAnswers: answers[id], updateAnswers };
};

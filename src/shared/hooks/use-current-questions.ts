import { useParams } from 'react-router-dom';

import { TEST_DATA_LIST } from '../constants/mocks.ts';
import { LSKeys } from '../types/ls-keys.ts';
import { TestModel } from '../types/test.ts';
import { useLocalStorage } from './use-local-storage.ts';

function getCurrentIndex(currentQuestion: TestModel) {
  const index = TEST_DATA_LIST.findIndex((el) => el.id === currentQuestion?.id);

  if (index === -1) {
    return 0;
  }

  return index;
}

export const useCurrentQuestions = () => {
  const { id } = useParams();
  const [currentQuestionList, updateCurrentQuestion] = useLocalStorage<
    Record<string, TestModel>
  >({
    key: LSKeys.currentQuestion,
    withParse: true,
  });

  const currentIndex = getCurrentIndex(currentQuestionList[id]);

  return {
    currentIndex,
    currentQuestionList,
    currentQuestions: currentQuestionList[id],
    updateCurrentQuestion,
  };
};

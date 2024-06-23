import { useParams } from 'react-router-dom';

import { TEST_DATA_LIST } from '../../shared/constants/mocks.ts';
import { useAnswer } from '../../shared/hooks/use-answer.ts';
import { useCurrentQuestions } from '../../shared/hooks/use-current-questions.ts';
import { Answer, TestModel } from '../../shared/types/test.ts';
import { cn } from '../../shared/utils/classnames.ts';
import { correctMultipleAnswers } from '../../shared/utils/correct-multiple-answers.ts';

interface TestProgressBarProps {
  className?: HTMLDivElement['className'];
}

export const TestProgressBar = ({ className }: TestProgressBarProps) => {
  const { currentQuestions, updateCurrentQuestion, currentQuestionList } =
    useCurrentQuestions();
  const { id } = useParams();
  const { currentAnswers } = useAnswer();

  const getCorrectAnswer = (questionId: number) => {
    if (currentQuestions?.id === questionId) {
      return false;
    }

    if (Array.isArray(currentAnswers?.[questionId])) {
      return correctMultipleAnswers(currentAnswers?.[questionId as Answer[]]);
    }

    return (currentAnswers?.[questionId] as Answer)?.correct === true;
  };

  const getWrongAnswer = (questionId: number) => {
    if (currentQuestions?.id === questionId) {
      return false;
    }

    if (Array.isArray(currentAnswers?.[questionId])) {
      return correctMultipleAnswers(currentAnswers?.[questionId as Answer[]]);
    }

    return (currentAnswers?.[questionId] as Answer)?.correct === false;
  };

  const onBarClick = (question: TestModel) => {
    updateCurrentQuestion({
      ...currentQuestionList,
      [id]: question,
    });
  };

  return (
    <div className='flex gap-2'>
      {TEST_DATA_LIST.map((el) => (
        <button
          key={el.id}
          className={cn('bg-light_grey/60 h-2 grow rounded-xl', className, {
            '!bg-danger/75': getWrongAnswer(el.id),
            '!bg-primary/75': currentQuestions?.id === el.id,
            '!bg-success/75': getCorrectAnswer(el.id),
          })}
          onClick={() => onBarClick(el)}
        />
      ))}
    </div>
  );
};

import { memo } from 'react';

import { useAnswer } from '../../shared/hooks/use-answer.ts';
import { useCurrentQuestions } from '../../shared/hooks/use-current-questions.ts';
import { Answer, TestModel } from '../../shared/types/test.ts';
import { Checkbox } from '../../shared/ui/checkbox/checkbox.tsx';
import { Radio } from '../../shared/ui/radio/radio.tsx';
import { hasMultipleAnswers } from '../../shared/utils/has-multiple-answer.ts';

interface TestCardProps extends TestModel {
  onPick: (
    id: number,
    value: boolean,
    answer: Answer,
    answerList: Answer[],
  ) => void;
}

export const TestCard = memo(
  ({ question, onPick, id, answers }: TestCardProps) => {
    const { currentQuestions } = useCurrentQuestions();

    const { currentAnswers } = useAnswer();

    const isMultiple = hasMultipleAnswers(answers);

    if (currentQuestions?.id !== id) return null;

    return (
      <div className='space-y-4'>
        <span className='font-medium'>{question}</span>

        <div className='flex flex-col gap-2'>
          {answers.map((answer) => {
            if (isMultiple) {
              return (
                <Checkbox
                  key={answer.answer}
                  label={answer.answer}
                  value={
                    (currentAnswers?.[id] as Answer[])
                      ?.map((el) => el.answer)
                      .includes(answer.answer) ?? false
                  }
                  onChange={(value) => onPick(id, value, answer, answers)}
                />
              );
            }

            return (
              <Radio
                key={answer.answer}
                label={answer.answer}
                name={id.toString()}
                value={
                  (currentAnswers?.[id] as Answer)?.answer === answer.answer
                }
                onChange={(value) => onPick(id, value, answer, answers)}
              />
            );
          })}
        </div>
      </div>
    );
  },
);

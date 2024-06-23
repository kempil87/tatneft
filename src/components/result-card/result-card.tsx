import { useAnswer } from '../../shared/hooks/use-answer.ts';
import { Answer, TestModel } from '../../shared/types/test.ts';
import { Icon } from '../../shared/ui/icon/icon.tsx';
import { cn } from '../../shared/utils/classnames.ts';

interface ResultCardProps extends TestModel {
  enabledAnswers?: boolean;
}

export const ResultCard = ({
  answers,
  question,
  id,
  enabledAnswers = false,
}: ResultCardProps) => {
  const { currentAnswers } = useAnswer();

  return (
    <div className='space-y-3'>
      <span className='flex items-center gap-5 text-white/70'>
        {question}{' '}
        {(currentAnswers?.[id] as Answer)?.correct && (
          <Icon className='text-success' name='common/done_circle' />
        )}
      </span>

      {!enabledAnswers && (
        <div className='flex flex-wrap items-center gap-2'>
          {answers.map((el) => (
            <p
              key={el.answer}
              className={cn('rounded-xl px-2 py-0.5 text-sm', {
                'bg-success/75':
                  (currentAnswers?.[id] as Answer)?.answer === el.answer ||
                  el.correct,
              })}
            >
              {el.answer}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

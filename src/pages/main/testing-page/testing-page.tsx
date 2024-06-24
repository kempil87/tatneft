import { useCallback, useEffect, useMemo } from 'react';

import { useUnit } from 'effector-react';
import { useNavigate, useParams } from 'react-router-dom';

import { TestCard } from '../../../components/test-card/test-card.tsx';
import { TestProgressBar } from '../../../components/test-progress-bar/test-progress-bar.tsx';
import { Timer } from '../../../components/timer/timer.tsx';
import { PageLayout } from '../../../containers/page-layout/page-layout.tsx';
import { LINKS } from '../../../shared/constants/links.ts';
import { useAnswer } from '../../../shared/hooks/use-answer.ts';
import { useCurrentQuestions } from '../../../shared/hooks/use-current-questions.ts';
import { useLocalStorage } from '../../../shared/hooks/use-local-storage.ts';
import { $timer } from '../../../shared/store/timer.ts';
import { LSKeys } from '../../../shared/types/ls-keys.ts';
import { Answer, TestModel } from '../../../shared/types/test.ts';
import { Button } from '../../../shared/ui/button/button.tsx';
import { Card } from '../../../shared/ui/card/card.tsx';
import { CircleBar } from '../../../shared/ui/circle-bar/circle-bar.tsx';
import { Title } from '../../../shared/ui/title/title.tsx';
import { getRandomQuestion } from '../../../shared/utils/get-random-question.ts';
import { hasMultipleAnswers } from '../../../shared/utils/has-multiple-answer.ts';

export const TestingPage = () => {
  const [userName] = useLocalStorage<string>({ key: LSKeys.userName });
  const { id } = useParams();
  const navigate = useNavigate();

  const questions = useMemo(getRandomQuestion, []);

  const [allTestList, updateAllTestList] = useLocalStorage<
    Record<string, TestModel>
  >({
    key: LSKeys.testList,
    withParse: true,
  });

  const testTimer = useUnit($timer);

  const { answers, currentAnswers, updateAnswers } = useAnswer();

  const {
    currentQuestion,
    currentQuestionList,
    updateCurrentQuestion,
    currentIndex,
  } = useCurrentQuestions();

  const isLastQuestion = currentIndex === questions.length - 1;

  const circleProgress = (() =>
    ((Object.values(currentAnswers ?? {}).length || 0) / questions.length) *
    100)();

  const onNext = () => {
    if (isLastQuestion) {
      onTestComplete();

      return;
    }

    updateCurrentQuestion({
      ...currentQuestion,
      [id]: questions[currentIndex + 1],
    });
  };

  const onTestComplete = () => {
    if (Object.keys(currentAnswers ?? {}).length === questions.length) {
      onSaveTest();
    } else {
      if (confirm('Тест не завершен, отправить ?')) {
        onSaveTest();
      }
    }
  };

  const onSaveTest = () => {
    updateAllTestList({
      ...allTestList,
      [id]: { questions, time: testTimer },
    });

    navigate(LINKS.result(id));
  };

  const onAnswerPick = useCallback(
    (
      answerId: number,
      value: boolean,
      answer: Answer,
      pickAnswers: Answer[],
    ) => {
      let payloadAnswers: Answer | Answer[] = answer;

      if (hasMultipleAnswers(pickAnswers)) {
        let arrayAnswers: Answer[] = currentAnswers?.[answerId]
          ? (currentAnswers?.[answerId] as Answer[])
          : [];

        if (arrayAnswers.map((el) => el?.answer).includes(answer.answer)) {
          const filteredArray = [];

          for (const arrayAnswer of arrayAnswers) {
            if (arrayAnswer.answer !== answer.answer) {
              filteredArray.push(arrayAnswer);
            }
          }
          arrayAnswers = filteredArray;
        } else {
          arrayAnswers.push(answer);
        }

        payloadAnswers = [...arrayAnswers];
      }

      updateAnswers({
        ...answers,
        [id]: {
          ...answers[id],
          [answerId]: payloadAnswers,
        },
      });
    },
    [answers, currentQuestion],
  );

  useEffect(() => {
    const defaultCurrentQuestion = JSON.parse(
      localStorage.getItem(LSKeys.currentQuestion),
    )?.[id];

    updateCurrentQuestion({
      ...currentQuestionList,
      [id]: defaultCurrentQuestion ?? questions[0],
    });
  }, []);

  return (
    <PageLayout>
      <Title>Приступайте к тесту {userName}</Title>

      <div className='grid grid-cols-[1fr_auto] gap-2 div:grow'>
        <Card
          contentClassName='space-y-5'
          extra={<Timer />}
          headerClassName='text-white/75'
          title={`Вопрос ${currentIndex + 1}/${questions.length}`}
        >
          <TestProgressBar questions={questions} />

          {questions.map((el) => (
            <TestCard onPick={onAnswerPick} {...el} key={el.id} />
          ))}

          <Button onClick={onNext}>
            {isLastQuestion ? 'Отправить на проверку' : 'Далее'}
          </Button>
        </Card>

        <Card
          className='h-full'
          contentClassName='flex justify-center min-w-[200px]'
          title='Пройдено'
        >
          <CircleBar value={circleProgress} />
        </Card>
      </div>
    </PageLayout>
  );
};

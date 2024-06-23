import { useLocalStorage } from '../../shared/hooks/use-local-storage.ts';
import { Answer, TestLog } from '../../shared/types/test.ts';
import { LSKeys } from '../../shared/types/ls-keys.ts';
import { Card } from '../../shared/ui/card/card.tsx';
import { useParams } from 'react-router-dom';
import { Collapse } from '../../shared/ui/collapse/collapse.tsx';
import { prepareTimer } from '../../shared/hooks/use-timer.ts';
import { ResultCard } from '../result-card/result-card.tsx';
import { correctMultipleAnswers } from '../../shared/utils/correct-multiple-answers.ts';
import { useAnswer } from '../../shared/hooks/use-answer.ts';

export const TestLogs = () => {
  const { id } = useParams();
  const [allTestList, updateAllTestList] = useLocalStorage<
    Record<string, TestLog>
  >({
    key: LSKeys.testList,
    withParse: true,
  });
  const { answers } = useAnswer();

  const filteredTestList = (() => {
    if (!id) return [];

    const result: TestLog[] = [];

    for (const testID in allTestList) {
      if (testID !== id) {
        result.push({ ...allTestList[testID], id: testID });
      }
    }

    return result;
  })();

  const totalCorrect = (answersList: Record<string, Answer | Answer[]>) => {
    let total = 0;

    for (const key in answersList) {
      if (Array.isArray(answersList[key])) {
        if (correctMultipleAnswers(answersList[key] as Answer[])) {
          total++;
        }
      } else {
        if ((answersList[key] as Answer).correct) {
          total++;
        }
      }
    }

    return total;
  };

  if (!filteredTestList.length) {
    return (
      <span className='text-placeholder mt-10 block pb-10 text-center'>
        Других результатов тестов не найдены, пройдите их еще раз что б увидеть
        результаты их попыток
      </span>
    );
  }
  return (
    <Card title='Другие попытки'>
      <Collapse>
        {filteredTestList.map(({ questions, time, id }) => (
          <Collapse.Item
            key={id.toString()}
            header={`Номер теста #${id}`}
            extra={`Количество баллов: ${totalCorrect(answers[id])} Затраченное время ${prepareTimer(time)}`}
          >
            {questions.map((el) => (
              <ResultCard key={el.id} enabledAnswers {...el} />
            ))}
          </Collapse.Item>
        ))}
      </Collapse>
    </Card>
  );
};

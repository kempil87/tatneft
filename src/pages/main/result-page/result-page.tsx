import { Link, useParams } from 'react-router-dom';

import { ResultCard } from '../../../components/result-card/result-card.tsx';
import { TestLogs } from '../../../components/test-logs/test-logs.tsx';
import { PageLayout } from '../../../containers/page-layout/page-layout.tsx';
import { LINKS } from '../../../shared/constants/links.ts';
import { useAnswer } from '../../../shared/hooks/use-answer.ts';
import { useLocalStorage } from '../../../shared/hooks/use-local-storage.ts';
import { prepareTimer } from '../../../shared/hooks/use-timer.ts';
import { LSKeys } from '../../../shared/types/ls-keys.ts';
import { Answer, TestLog, TestModel } from '../../../shared/types/test.ts';
import { Button } from '../../../shared/ui/button/button.tsx';
import { Card } from '../../../shared/ui/card/card.tsx';
import { Title } from '../../../shared/ui/title/title.tsx';
import { correctMultipleAnswers } from '../../../shared/utils/correct-multiple-answers.ts';
import { getNextId } from '../../../shared/utils/get-next-id.ts';

export const ResultPage = () => {
  const [userName] = useLocalStorage<string>({ key: LSKeys.userName });
  const { id } = useParams();

  const [allTestList] = useLocalStorage<Record<string, TestLog>>({
    key: LSKeys.testList,
    withParse: true,
  });

  const { currentAnswers } = useAnswer();

  const totalCorrect = (() => {
    let total = 0;

    for (const key in currentAnswers) {
      if (Array.isArray(currentAnswers[key])) {
        if (correctMultipleAnswers(currentAnswers[key] as Answer[])) {
          total++;
        }
      } else {
        if ((currentAnswers[key] as Answer).correct) {
          total++;
        }
      }
    }

    return total;
  })();

  return (
    <PageLayout>
      <Title>
        {userName} твои результаты по тесту # {id}
      </Title>

      <Card
        contentClassName='space-y-5'
        extra={`Затраченное время ${prepareTimer(allTestList?.[id]?.time)}`}
        headerClassName='text-white/75'
        title={`Ваши баллы: ${totalCorrect}`}
      >
        {allTestList?.[id] &&
          Object.values(allTestList?.[id]?.questions as TestModel[]).map(
            (answer) => <ResultCard key={answer.id} {...answer} />,
          )}

        <Link className='block' to={LINKS.testing(getNextId())}>
          <Button variant='light'>Пройти еще раз</Button>
        </Link>
      </Card>

      <TestLogs />
    </PageLayout>
  );
};

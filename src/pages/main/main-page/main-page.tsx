import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { PageLayout } from '../../../containers/page-layout/page-layout.tsx';
import { FORM_RULES } from '../../../shared/constants/form-rules.ts';
import { LINKS } from '../../../shared/constants/links.ts';
import { useLocalStorage } from '../../../shared/hooks/use-local-storage.ts';
import { Button } from '../../../shared/ui/button/button.tsx';
import { Input } from '../../../shared/ui/input/input.tsx';
import { Title } from '../../../shared/ui/title/title.tsx';
import { LSKeys } from '../../../shared/types/ls-keys.ts';
import { Alert } from '../../../components/alert/alert.tsx';

interface FormProps {
  user_name: string;
}

export const MainPage = () => {
  const methods = useForm<FormProps>();
  const navigate = useNavigate();
  const [_, updateUserName] = useLocalStorage({ key: LSKeys.userName });
  const [lastTestId, incrementLastTestId] = useLocalStorage<string>({
    key: LSKeys.lastTestId,
    defaultValue: '1',
  });

  const onStart = ({ user_name }: FormProps) => {
    updateUserName(user_name);
    incrementLastTestId(String(Number(lastTestId) + 1));
    navigate(LINKS.testing(lastTestId));
  };

  return (
    <PageLayout>
      <Alert />

      <FormProvider {...methods}>
        <Title>Тестирование на тему Нефть</Title>

        <Input<FormProps>
          label='Введите ваше имя'
          maxLength={24}
          name='user_name'
          rules={FORM_RULES.name}
        />

        <Button onClick={methods.handleSubmit(onStart)}>
          Начать тестирование
        </Button>
      </FormProvider>
    </PageLayout>
  );
};

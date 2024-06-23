import { ReactNode } from 'react';

import { useFormContext } from 'react-hook-form';

export interface FormErrorProps {
  name: string;
  errorMessage?: ReactNode;
}

export const FormError = ({ name, errorMessage }: FormErrorProps) => {
  const { formState } = useFormContext();

  const error = formState.errors[name]?.message as string;

  if (!error && !errorMessage) return null;

  return (
    <span className='mt-2 block pl-2 text-xs font-medium text-danger'>
      {errorMessage ?? error}
    </span>
  );
};

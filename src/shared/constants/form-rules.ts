import { RegisterOptions } from 'react-hook-form';

export const FORM_RULES: Record<'name', RegisterOptions> = {
  name: {
    minLength: {
      message: 'Имя должно быть не менее 2 символов',
      value: 2,
    },
    pattern: {
      message: 'Имя может состоять только из букв',
      value: /^[A-Za-zА-я]+$/,
    },
    required: 'Необходимо заполнить имя',
  },
};

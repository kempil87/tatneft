import { ButtonVariants } from '../ui/button/button.tsx';

export const BUTTONS_VARIANTS: Record<ButtonVariants, string> = {
  danger: 'border-red bg-bg hover:bg-bg/30',
  light: 'border-white text-black bg-white hover:bg-light_grey',
  outline: 'border-border bg-accent hover:bg-bg/30',
  primary: 'hover:bg-accent border-0',
};

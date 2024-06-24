import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '../../utils/classnames.ts';
import { BUTTONS_VARIANTS } from '../../constants/button-variants.ts';

export type ButtonVariants = 'outline' | 'light' | 'danger' | 'primary';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  href?: string;
  variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, variant = 'light', disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          'inline-flex h-9 w-fit items-center justify-center rounded-md border px-4 py-2 text-sm shadow-sm transition-all disabled:pointer-events-none disabled:opacity-50',
          { 'pointer-events-none opacity-50': disabled },
          BUTTONS_VARIANTS[variant],
          props.className,
        )}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

import { ChangeEvent, InputHTMLAttributes, ReactNode, useId } from 'react';

import { cn } from '../../utils/classnames.ts';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  onChange: (value: boolean) => void;
  value: boolean;
  indeterminate?: boolean;
  label?: ReactNode;
  wrapClassName?: HTMLDivElement['className'];
}

export const Checkbox = ({
  onChange,
  disabled,
  wrapClassName,
  value,
  indeterminate,
  label,
}: CheckboxProps) => {
  const id = useId();

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(!JSON.parse(e.target.value));
  };

  return (
    <div
      className={cn(
        'group inline-flex w-fit items-center gap-2',
        wrapClassName,
      )}
    >
      <label
        htmlFor={id}
        className={cn(
          'basic-checkbox ring-light_grey relative cursor-pointer select-none rounded bg-transparent p-px ring-1 transition-all duration-300 clamp-4',
          { active: value },
          { indeterminate },
          { '!cursor-not-allowed': disabled },
          { 'group-hover:ring-white/60': !disabled && !value },
        )}
      >
        <input
          hidden
          className='appearance-none focus:outline-0'
          type='checkbox'
          value={JSON.stringify(value)}
          onChange={change}
          {...{ disabled, id }}
        />
      </label>

      {label && (
        <label
          htmlFor={id}
          className={cn('cursor-pointer select-none text-sm font-medium', {
            '!cursor-not-allowed': disabled,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

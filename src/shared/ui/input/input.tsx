import { ChangeEvent, InputHTMLAttributes, ReactNode, useRef } from 'react';

import {
  Controller,
  FieldName,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';

import { cn } from '../../utils/classnames.ts';
import { FormError } from '../form-error/form-error.tsx';
import { enabledNumberKeyEvent } from './common/enabled-keyboard-options.ts';
import { IconButton } from '../icon-button/icon-button.tsx';
import { Icon } from '../icon/icon.tsx';

type InputBaseProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'name' | 'type'
>;

export interface InputProps<Name extends FieldValues> extends InputBaseProps {
  name: FieldPath<Name>;
  _prefix?: ReactNode;
  allowClear?: boolean;
  label?: string;
  onClear?: () => void;
  rules?: RegisterOptions;
  textChange?: (name: string, value: string) => void;
  type?: 'number' | 'text';
}

export const Input = <Name extends FieldValues>({
  _prefix,
  label,
  onClear,
  allowClear = true,
  mask,
  textChange,
  name,
  rules,
  ...props
}: InputProps<Name>) => {
  const { control, resetField } = useFormContext();
  const prefixRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => {
        const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
          let { value: text } = target;

          if (props.maxLength && text.length >= props.maxLength) {
            text = text.slice(0, props.maxLength);
          }

          textChange?.(name, text);
          field.onChange(text);
        };

        const handleClear = () => {
          resetField(name);
          onClear?.();
        };

        return (
          <div className='flex flex-col'>
            <div className='group relative'>
              <div
                ref={prefixRef}
                className={cn('left-2.5 inline-block flex-center pos-abs-y', {
                  invisible: !_prefix,
                })}
              >
                {_prefix}
              </div>

              {label && (
                <label
                  ref={labelRef}
                  className={cn(
                    'text-placeholder group-focus-within:bg-bg pointer-events-none inline-block pl-5 pr-3.5 text-sm transition-all duration-300 pos-abs-y group-focus-within:!top-0 group-focus-within:!pl-2 group-focus-within:text-xs',
                    { 'bg-bg !top-0 !pl-2 !text-xs': field.value },
                  )}
                >
                  {label}
                </label>
              )}

              <input
                ref={inputRef}
                {...props}
                className={cn(
                  'focus:placeholder:text-placeholder caret-placeholder placeholder:text-placeholder h-12 w-full appearance-none rounded-xl border bg-transparent px-3.5 py-1 text-sm transition-all duration-300 focus:outline-0',
                  { 'pr-8': allowClear },
                  { 'placeholder:text-transparent': label },
                  {
                    'border-danger focus:border-danger/70 active:border-danger/70':
                      fieldState.error?.message,
                  },
                  {
                    'border-primary focus:border-primary/70 active:border-primary/70':
                      !fieldState.error?.message,
                  },
                )}
                value={field.value ?? ''}
                onChange={handleChange}
                {...(props.type === 'number' && enabledNumberKeyEvent)}
              />

              {field.value && allowClear && (
                <button
                  className={cn(
                    'right-3 aspect-square !rounded-full transition-all clamp-6 flex-center pos-abs-y',
                    {
                      'bg-danger/20 hover:bg-danger/70':
                        fieldState.error?.message,
                    },
                    {
                      'bg-primary/20 hover:bg-primary/70':
                        !fieldState.error?.message,
                    },
                  )}
                  title='Clear'
                  onClick={handleClear}
                >
                  <Icon className='clamp-3' name='common/close' />
                </button>
              )}
            </div>

            <FormError name={name} />
          </div>
        );
      }}
    />
  );
};

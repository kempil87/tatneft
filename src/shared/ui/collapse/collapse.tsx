import { PropsWithChildren, ReactNode, useRef } from 'react';

import { cn } from '../../utils/classnames.ts';
import { Icon } from '../icon/icon.tsx';

type CollapseProps = PropsWithChildren;
export interface CollapseItemProps extends PropsWithChildren {
  header: ReactNode;
  contentClassName?: HTMLDivElement['className'];
  extra?: ReactNode;
  icon?: ReactNode;
  onChange?: (opened: boolean) => void;
  opened?: boolean;
}

export const Collapse = ({ children }: CollapseProps) => {
  if (!children) {
    throw new Error('Collapse must be with children');
  }

  return (
    <div className='border-border overflow-hidden rounded-xl border'>
      {children}
    </div>
  );
};

Collapse.Item = ({
  opened = false,
  children,
  header,
  onChange,
  icon,
  contentClassName,
  extra,
}: CollapseItemProps) => {
  const headerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    if (contentRef.current === null || headerRef.current === null) return;

    const updatedOpened = JSON.stringify(
      !JSON.parse(contentRef.current.dataset.open ?? JSON.stringify(opened)),
    );

    if (JSON.parse(contentRef.current.dataset.open ?? JSON.stringify(opened))) {
      contentRef.current.classList.remove('fade-1');
    } else {
      contentRef.current.classList.add('fade-1');
    }
    contentRef.current.dataset.open = updatedOpened;
    headerRef.current.dataset.open = updatedOpened;

    onChange?.(JSON.parse(updatedOpened));
  };

  return (
    <section className='border-light_grey/50 border-b last-of-type:border-b-0'>
      <button
        ref={headerRef}
        className='bg-placeholder/80 group w-full'
        data-open={JSON.stringify(opened)}
        onClick={toggle}
      >
        <div className='px-4 py-3 flex-between'>
          <div className='inline-flex w-full items-center justify-start gap-x-4'>
            <div className='-rotate-90 transition-transform duration-300 ease-linear group-data-[open=true]:rotate-0'>
              {icon || (
                <Icon className='size-4 stroke-white' name='common/arrow' />
              )}
            </div>

            {header}
          </div>

          <div
            className='cursor-default whitespace-nowrap text-sm'
            onClick={(e) => e.stopPropagation()}
          >
            {extra}
          </div>
        </div>
      </button>

      <div
        ref={contentRef}
        data-open={JSON.stringify(opened)}
        className={cn(
          'fade-1 border-light_grey/50 bg-placeholder/80 group group pointer-events-none h-0 px-4 transition-all duration-[400] ease-linear data-[open=true]:pointer-events-auto data-[open=true]:h-fit data-[open=true]:border-t data-[open=true]:py-3',
          contentClassName,
        )}
      >
        <div className='opacity-0 group-data-[open=true]:opacity-100'>
          {children}
        </div>
      </div>
    </section>
  );
};

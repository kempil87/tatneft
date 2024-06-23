import { HTMLAttributes, PropsWithChildren, Suspense } from 'react';

import { Fallback } from '../../components/fallback/fallback.tsx';
import { cn } from '../../shared/utils/classnames.ts';

interface PageLayout extends HTMLAttributes<HTMLDivElement> {}

export const PageLayout = ({
  children,
  ...props
}: PropsWithChildren<PageLayout>) => (
  <Suspense fallback={<Fallback />}>
    <div
      {...props}
      className={cn('page-cont h-full space-y-4', props.className)}
    >
      {children}
    </div>
  </Suspense>
);

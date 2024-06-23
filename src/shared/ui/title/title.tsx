import { HTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '../../utils/classnames.ts';

interface Title extends HTMLAttributes<HTMLHeadElement> {}

export const Title = ({ children, ...props }: PropsWithChildren<Title>) => (
  <h3 {...props} className={cn('text-4xl font-bold', props.className)}>
    {children}
  </h3>
);

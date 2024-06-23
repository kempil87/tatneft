import {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react';

import { cn } from '../../utils/classnames.ts';

export interface CardProps
  extends PropsWithChildren,
    Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  contentClassName?: HTMLDivElement['className'];
  contentStyles?: CSSProperties;
  extra?: ReactNode;
  headerClassName?: HTMLDivElement['className'];
  headerStyles?: CSSProperties;
  title?: ReactNode;
}

export const Card = ({
  children,
  title,
  headerStyles,
  headerClassName,
  contentClassName,
  contentStyles,
  extra,
  ...props
}: CardProps) => (
  <div
    {...props}
    className={cn(
      'bg-placeholder/45 border-border rounded-xl border',
      props.className,
    )}
  >
    {(title || extra) && (
      <div
        className={cn('p-3.5 font-bold flex-between', headerClassName)}
        style={headerStyles}
      >
        <div>{title}</div>
        {extra && <div>{extra}</div>}
      </div>
    )}

    <div
      className={cn('overflow-hidden rounded-b-md p-4', contentClassName)}
      style={contentStyles}
    >
      {children}
    </div>
  </div>
);

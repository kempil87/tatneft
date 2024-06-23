import { cn } from '../../utils/classnames.ts';
import { Button, ButtonProps } from '../button/button.tsx';
import { Icon, IconProps } from '../icon/icon.tsx';

export interface IconButtonProps extends ButtonProps {
  iconProps: IconProps;
}

export const IconButton = ({ iconProps, ...props }: IconButtonProps) => (
  <Button
    {...{ ...props, variant: props.variant || 'primary' }}
    className={cn('aspect-square !p-0', props.className)}
    title={props.title ?? `${iconProps.name.replace('/', '')} icon`}
  >
    <Icon {...iconProps} className={cn('size-5', iconProps.className)} />
  </Button>
);

import { cn } from '../../utils/classnames.ts';
import { Icon, IconProps } from '../icon/icon.tsx';

interface SpinnerProps extends Partial<IconProps> {
  size?: number;
}

export const Spinner = ({ size = 24, className }: SpinnerProps) => (
  <div>
    <Icon
      className={cn('animate-spin', className)}
      height={size}
      name='common/spin'
      width={size}
    />
  </div>
);

import { useTimer } from '../../shared/hooks/use-timer.ts';

export const Timer = () => {
  const { timer } = useTimer(true);

  return <span className='block w-16 text-center text-2xl'>{timer}</span>;
};

import { useEffect } from 'react';

import { useUnit } from 'effector-react';

import { $timer, updateTimer } from '../store/timer.ts';

export function prepareTimer(seconds: number) {
  const mm = Math.floor(+seconds / 60);
  const ss = Math.floor(+seconds % 60);

  return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

export const useTimer = (prepare = false) => {
  const time = useUnit($timer);
  const prepareTime = prepareTimer(time);

  useEffect(() => {
    const id = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  if (prepare) {
    return { timer: prepareTime };
  }

  return { timer: Number(time) };
};

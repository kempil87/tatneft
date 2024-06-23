import { createEvent, createStore } from 'effector';

export const updateTimer = createEvent();
export const resetTimer = createEvent();

export const $timer = createStore<number>(1)
  .on(updateTimer, (prev) => prev + 1)
  .reset(resetTimer);

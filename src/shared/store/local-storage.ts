// noinspection TypeScriptValidateTypes

import { createEffect, createEvent, createStore, sample } from 'effector';

export type LocalStorage = Record<string, string>;
type Payload = {
  key: string;
  value: string;
};

export const setLocalStorage = createEvent<Payload>();
export const resetLocalStorage = createEvent();

export const $localStorage = createStore<LocalStorage>({})
  .on(setLocalStorage, (state, { key, value }) => ({
    ...state,
    [key]: value,
  }))
  .reset(resetLocalStorage);

const clearStorageFx = createEffect(() => {
  localStorage.clear();
});

sample({
  source: resetLocalStorage,
  target: [clearStorageFx],
});

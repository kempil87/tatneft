import { LSKeys } from '../types/ls-keys.ts';

export const getNextId = () =>
  String(Number(localStorage.getItem(LSKeys.lastTestId)) + 1);

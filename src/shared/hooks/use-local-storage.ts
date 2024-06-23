import { useEffect } from 'react';

import { useUnit } from 'effector-react';

import {
  $localStorage,
  LocalStorage,
  setLocalStorage,
} from '../store/local-storage.ts';
import { DefaultType } from '../types/global.ts';

interface UseLocalStorage {
  key: string;
  defaultValue?: string | Record<string, unknown>;
  withParse?: boolean;
}

function getKey(
  localStorage: LocalStorage,
  key: string,
  withParse,
  defaultValue,
) {
  if (withParse) {
    return JSON.parse(localStorage[key] ?? '{}');
  }

  return localStorage[key] ?? defaultValue;
}

export const useLocalStorage = <T>({
  key,
  defaultValue,
  withParse = false,
}: UseLocalStorage) => {
  const localStorage = useUnit($localStorage);
  const localStorageKey: DefaultType<string, T> = getKey(
    localStorage,
    key,
    withParse,
    defaultValue,
  );

  const updateLocalStorage = (value: unknown) => {
    if (typeof value !== 'string') {
      setLocalStorage({ key, value: JSON.stringify(value) });
      window.localStorage.setItem(key, JSON.stringify(value));

      return;
    }

    setLocalStorage({ key, value });
    window.localStorage.setItem(key, value);
  };

  useEffect(() => {
    setLocalStorage({
      key,
      value: window.localStorage.getItem(key) ?? defaultValue,
    });

    const defaultValueIsString = typeof defaultValue === 'string';
    const prepareDefaultValue = defaultValueIsString
      ? (defaultValue as string)
      : JSON.stringify(defaultValue);

    defaultValue && window.localStorage.setItem(key, prepareDefaultValue);
  }, []);

  return [localStorageKey, updateLocalStorage, localStorage];
};

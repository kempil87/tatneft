import { lazy } from 'react';

export const ErrorPageLazy = lazy(() =>
  import('./error-page.tsx').then((res) => ({ default: res.ErrorPage })),
);

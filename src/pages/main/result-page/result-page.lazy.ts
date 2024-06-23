import { lazy } from 'react';

export const ResultPageLazy = lazy(() =>
  import('./result-page.tsx').then((r) => ({ default: r.ResultPage })),
);

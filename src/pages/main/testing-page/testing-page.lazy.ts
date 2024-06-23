import { lazy } from 'react';

export const TestingPageLazy = lazy(() =>
  import('./testing-page.tsx').then((r) => ({ default: r.TestingPage })),
);

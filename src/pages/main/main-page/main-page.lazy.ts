import { lazy } from 'react';

export const MainPageLazy = lazy(() =>
  import('./main-page.tsx').then((r) => ({ default: r.MainPage })),
);

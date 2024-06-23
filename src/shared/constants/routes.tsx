import { MainPageLazy } from '../../pages/main/main-page/main-page.lazy.ts';
import { ResultPageLazy } from '../../pages/main/result-page/result-page.lazy.ts';
import { TestingPageLazy } from '../../pages/main/testing-page/testing-page.lazy.ts';
import { LINKS } from './links.ts';

export const ROUTES = [
  {
    element: <MainPageLazy />,
    path: LINKS.main,
  },
  {
    element: <TestingPageLazy />,
    path: LINKS.testing(':id'),
  },
  {
    element: <ResultPageLazy />,
    path: LINKS.result(':id'),
  },
];

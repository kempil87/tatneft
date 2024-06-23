import { Suspense } from 'react';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Fallback } from './components/fallback/fallback.tsx';
import { LINKS } from './shared/constants/links.ts';
import { ROUTES } from './shared/constants/routes.tsx';
import { useHotKeys } from './shared/hooks/use-hot-keys.ts';
import { resetLocalStorage } from './shared/store/local-storage.ts';
import { resetTimer } from './shared/store/timer.ts';

export const App = () => {
  const navigate = useNavigate();

  useHotKeys('Shift', () => {
    navigate(LINKS.main);
    resetTimer();
    resetLocalStorage();
  });

  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<Navigate replace to='/' />} path='*' />

        {ROUTES.map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};

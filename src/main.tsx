import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { App } from './app.tsx';
import ErrorBoundary from './components/error-boundary/error-boundary.tsx';

import '../public/styles/index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <ErrorBoundary>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>,
);

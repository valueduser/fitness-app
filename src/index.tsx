import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, createRoutesFromChildren, matchRoutes, useLocation, useNavigationType } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { createRoot } from 'react-dom/client';

Sentry.init({
  dsn: 'https://53762b96badf4af5a85b494332e73aa3@o141824.ingest.sentry.io/5614947',
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      )
    }),
    new Sentry.Replay()
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(null);

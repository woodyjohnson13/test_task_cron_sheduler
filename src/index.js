import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CronProvider } from './context/CronExpressionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CronProvider>
        <App />
    </CronProvider>
  </React.StrictMode>
);


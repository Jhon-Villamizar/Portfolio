import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CounterProvider from './db/context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

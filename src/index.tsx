import React from 'react';
import { App } from './app/App';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root') as HTMLDivElement;

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

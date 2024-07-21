import React from 'react';
import ReactDOM from 'react-dom/client';
import MainProvider from './main-provider';
import '../shared/assets/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider />
  </React.StrictMode>,
);

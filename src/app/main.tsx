import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import relativeTime from 'dayjs/plugin/relativeTime';
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainProvider from './main-provider';
import '../shared/assets/styles/index.css';
import 'dayjs/locale/vi';

dayjs.extend(isBetween);
dayjs.extend(relativeTime);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainProvider />
  </React.StrictMode>,
);

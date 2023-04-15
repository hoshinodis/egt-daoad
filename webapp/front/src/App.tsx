import { AppProvider } from '@/providers/App';

import { Routes } from '@/routes';

import { Buffer } from 'buffer'

window.Buffer = window.Buffer || Buffer

export const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

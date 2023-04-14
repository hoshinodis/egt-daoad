import { AppProvider } from '@/providers/App';

import { Routes } from '@/routes';


export const App = () => (
  <AppProvider>
    <Routes />
  </AppProvider>
);

import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Spinner } from '@/components/Elements';

const queryClient = new QueryClient();
export type AppProviderProps = {
  children: React.ReactNode;
};
export const AppProvider = ({ children }: AppProviderProps) => (
  <React.Suspense
    fallback={
      <div className="flex h-screen w-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    }
  >
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
  </React.Suspense>
);

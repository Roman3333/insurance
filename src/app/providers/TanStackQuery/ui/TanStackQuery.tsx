'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface TanstackQueryProps {
  children: ReactNode;
}

export const TanstackQuery = (props: TanstackQueryProps) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

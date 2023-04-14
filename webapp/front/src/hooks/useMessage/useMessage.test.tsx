import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { cleanup, renderHook, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';

import { MessageResponseType, useMessage } from '@/hooks/useMessage';

vi.mock('@/lib/axios');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('hooks/useMessage', () => {
  beforeEach(() => {
    cleanup();
    queryClient.clear();
  });

  test('success', async () => {
    const message = 'Hello World!';

    const { axios } = await import('@/lib/axios');

    axios.get = vi.fn().mockResolvedValueOnce({
      data: {
        message,
      } satisfies MessageResponseType,
    });

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(axios.get).toHaveBeenCalledWith('/');
    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBe(message));
  });

  test('error', async () => {
    const message = 'load error!';

    const { axios } = await import('@/lib/axios');

    axios.get = vi.fn().mockRejectedValueOnce({});

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(axios.get).toHaveBeenCalledWith('/');
    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBe(message));
  });

  test('loading', async () => {
    const message = 'loading...';

    const { axios } = await import('@/lib/axios');

    axios.get = vi.fn().mockReturnValueOnce(new Promise(() => {}));

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(axios.get).toHaveBeenCalledWith('/');
    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBe(message));
  });

  test('empty response', async () => {
    const message = 'load error!';

    const { axios } = await import('@/lib/axios');

    axios.get = vi.fn().mockResolvedValueOnce({
      data: undefined,
    });

    const { result } = renderHook(() => useMessage(), {
      wrapper,
    });

    expect(axios.get).toHaveBeenCalledWith('/');
    expect(axios.get).toHaveBeenCalledTimes(1);

    await waitFor(() => expect(result.current).toBe(message));
  });
});

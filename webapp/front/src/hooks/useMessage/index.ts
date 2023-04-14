import { useQuery } from '@tanstack/react-query';

import { axios } from '@/lib/axios';

/**
 * @package
 */
export type MessageResponseType = { message: string };

export const useMessage = () => {
  const { isLoading, error, data } = useQuery(['useMessage'], () =>
    axios.get<MessageResponseType>('/')
  );

  return isLoading ? 'loading...' : error ? 'load error!' : data?.data?.message ?? 'load error!';
};

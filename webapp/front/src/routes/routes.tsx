import { RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImports';

const { NotFound } = lazyImport(() => import('../features/NotFound'), 'NotFound');
const { Advertiser } = lazyImport(() => import('../features/Advertiser'), 'Advertiser');
const { Publisher } = lazyImport(() => import('../features/Publisher'), 'Publisher');
const { Welcome } = lazyImport(() => import('../features/Welcome'), 'Welcome');

/**
 * @package
 */
export const routes = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/advertiser',
    element: <Advertiser />,
  },
  {
    path: '/publisher',
    element: <Publisher />,
  },
  {
    path: '/welcome',
    element: <Welcome />,
  },
] satisfies RouteObject[];

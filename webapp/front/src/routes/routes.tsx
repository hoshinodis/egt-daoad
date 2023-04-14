import { RouteObject } from 'react-router-dom';

import { lazyImport } from '@/utils/lazyImports';

const { NotFound } = lazyImport(() => import('../features/NotFound'), 'NotFound');
const { Top } = lazyImport(() => import('../features/Top'), 'Top');

/**
 * @package
 */
export const routes = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Top />,
  },
] satisfies RouteObject[];

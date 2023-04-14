import { useRoutes } from 'react-router-dom';

import { routes } from '@/routes/routes';

/**
 * @package
 */
export const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

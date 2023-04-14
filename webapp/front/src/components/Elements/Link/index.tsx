import { Link as RouterLink } from 'react-router-dom';

import clsx from 'clsx';

import { isExternalUrl } from '@/utils/isExternalUrl';

export type LinkPropsType = {
  className?: string;
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
};
export const Link = ({ href, newTab, className, children }: LinkPropsType) => {
  const param = {
    className: clsx('font-medium text-indigo-500 hover:text-indigo-400', className),

    target: newTab ? '_blank' : undefined,
    rel: newTab ? 'noreferrer' : undefined,
  };
  return isExternalUrl(href) ? (
    <a href={href} {...param}>
      {children}
    </a>
  ) : (
    <RouterLink to={href} {...param}>
      {children}
    </RouterLink>
  );
};

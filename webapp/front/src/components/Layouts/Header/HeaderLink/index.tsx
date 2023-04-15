import clsx from 'clsx';

import { Link } from '@/components/Elements/Link';

export type HeaderLinkPropsType = {
  className?: string;
  children: React.ReactNode;
  current: boolean;
  href: string;
};
export const HeaderLink = ({ className, children, current, href }: HeaderLinkPropsType) => (
  <Link
    className={clsx(
      'text-24-wide pb-1 text-neutral-100 ',
      current ? 'border-b-4 border-neutral-100' : 'text-primary-40 hover:text-neutral-100',
      className
    )}
    href={href}
  >
    {children}
  </Link>
);

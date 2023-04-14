import clsx from 'clsx';

export type CardPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const Card = ({ className, children }: CardPropsType) => (
  <div className={clsx('p-8', className)}>{children}</div>
);

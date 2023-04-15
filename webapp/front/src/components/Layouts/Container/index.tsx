import clsx from 'clsx';

export type ContainerPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const Container = ({ className, children }: ContainerPropsType) => (
  <div className={clsx('px-12', className)}>{children}</div>
);

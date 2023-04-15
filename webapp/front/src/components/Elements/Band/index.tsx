import clsx from 'clsx';

export type BandPropsType = {
  className?: string;
  children: React.ReactNode;
  color?: 'process' | 'passed' | 'rejected';
  direction?: 'horizontal' | 'vertical';
};
export const Band = ({
  className,
  children,
  color = 'process',
  direction = 'horizontal',
}: BandPropsType) => (
  <div
    className={clsx(
      'text-neutral-10 flex flex-row items-center border-solid border-[#47554E] font-sans',
      color === 'process' && 'bg-primary-40',
      color === 'passed' && 'bg-passed',
      color === 'rejected' && 'bg-rejected',
      direction === 'horizontal'
        ? 'h-12 border-t py-[9px] px-[24px]'
        : 'w-12 flex-col border-r py-[12.5px] px-[24px]',
      className
    )}
  >
    {children}
  </div>
);

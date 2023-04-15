import clsx from 'clsx';

export type ModalTitlePropsType = {
  className?: string;
  children: React.ReactNode;
};
export const ModalTitle = ({ className, children }: ModalTitlePropsType) => (
  <div>
    <div
      className={clsx(
        'h-12 w-full overflow-hidden text-ellipsis whitespace-nowrap text-xl leading-8',
        className
      )}
    >
      {children}
    </div>
  </div>
);

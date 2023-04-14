import clsx from 'clsx';

export type ModalActionsPropsType = {
  className?: string;
  children: React.ReactNode;
};
export const ModalActions = ({ className, children }: ModalActionsPropsType) => (
  <div>
    <div
      className={clsx(
        'flex h-12 w-full justify-end gap-4 overflow-hidden text-ellipsis whitespace-nowrap text-xl leading-8',
        className
      )}
    >
      {children}
    </div>
  </div>
);

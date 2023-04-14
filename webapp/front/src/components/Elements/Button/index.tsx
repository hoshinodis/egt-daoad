import clsx from 'clsx';

export type ButtonPropsType = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'neutral';
};
export const Button = ({ onClick, className, children, color = 'neutral' }: ButtonPropsType) => (
  <button
    type="button"
    className={clsx(
      'text-18-wide cursor-pointer py-[12px] px-[36px] text-neutral-100 shadow-[0px_1px_2px_rgba(0,0,0,0.2)]',
      color === 'primary' && 'bg-primary-main',
      color === 'secondary' && 'bg-secondary',
      color === 'neutral' && 'bg-neutral-40',
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

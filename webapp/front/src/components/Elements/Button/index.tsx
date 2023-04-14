import clsx from 'clsx';

export type ButtonPropsType = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};
export const Button = ({ onClick, className, children }: ButtonPropsType) => (
  <button
    type="button"
    className={clsx(
      'cursor-pointer rounded-lg border border-solid border-transparent bg-zinc-300 py-2 px-5 text-base font-medium transition-[border-color] hover:border-blue-500 focus:outline-4 focus-visible:outline-4 dark:bg-black',
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);

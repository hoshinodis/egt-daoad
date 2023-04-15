import clsx from 'clsx';

export type FieldWrapperPropsType = {
  className?: string;
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
};
export const FieldWrapper = ({ className, label, htmlFor, children }: FieldWrapperPropsType) => (
  <div className={clsx('flex flex-col', className)}>
    <label className="text-18-semi block text-neutral-100/70" htmlFor={htmlFor}>
      {label}
    </label>
    {children}
  </div>
);

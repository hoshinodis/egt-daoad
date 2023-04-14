import { useId } from 'react';

import clsx from 'clsx';

import { FieldWrapper } from '@/components/Form/FieldWrapper';

export type TextFieldPropsType = {
  className?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const TextField = ({
  className,
  label,
  placeholder,
  value,
  onChange,
}: TextFieldPropsType) => {
  const id = useId();
  return (
    <FieldWrapper className={className} label={label} htmlFor={id}>
      <input
        id={id}
        className={clsx(
          'text-18-medium placeholder:text-18-medium placeholder:text-neutral-80 bg-primary-main rounded border border-solid border-neutral-100 p-1 text-neutral-100 outline-none'
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

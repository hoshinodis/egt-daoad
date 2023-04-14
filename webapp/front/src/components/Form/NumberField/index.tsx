import React, { useId } from 'react';

import clsx from 'clsx';

import { FieldWrapper } from '@/components/Form/FieldWrapper';

export type NumberFieldPropsType = {
  className?: string;
  label: string;
  placeholder: string;
  value: string;
  onMaxClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const NumberField = ({
  className,
  label,
  placeholder,
  value,
  onMaxClick,
  onChange,
}: NumberFieldPropsType) => {
  const id = useId();
  return (
    <FieldWrapper className={clsx('relative', className)} label={label} htmlFor={id}>
      <input
        type="number"
        id={id}
        className={clsx(
          'text-18-medium placeholder:text-18-medium placeholder:text-neutral-80 bg-primary-main appearance-textfield rounded border border-solid border-neutral-100 p-1 text-neutral-100 outline-none'
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="text-18-wide absolute right-2 bottom-1 text-neutral-100"
        onClick={onMaxClick}
      >
        MAX
      </button>
    </FieldWrapper>
  );
};

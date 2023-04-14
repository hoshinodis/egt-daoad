import { useId } from 'react';

import clsx from 'clsx';

import { FieldWrapper } from '@/components/Form/FieldWrapper';

export type CheckboxPropsType = {
  className?: string;
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};
export const Checkbox = ({ className, label, checked, onChange }: CheckboxPropsType) => {
  const id = useId();
  return (
    <FieldWrapper className={className} label={label}>
      <label
        className="flex cursor-pointer items-center justify-around gap-1 rounded border p-1"
        htmlFor={id}
      >
        <input
          type="checkbox"
          id={id}
          className={clsx('peer sr-only')}
          checked={checked}
          onChange={onChange}
        />
        <div className="peer-checked:bg-passed w-1/2 rounded text-center">OK</div>
        <div className="bg-rejected w-1/2 rounded text-center peer-checked:bg-inherit">NG</div>
      </label>
    </FieldWrapper>
  );
};

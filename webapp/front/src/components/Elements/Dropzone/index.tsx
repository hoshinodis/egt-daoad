import clsx from 'clsx';

import Dp from 'react-dropzone';

import { Icon } from '@/components/Elements/Icon';

import UploadIcon from '@/assets/icons/upload.svg';

export type DropzonePropsType = {
  className?: string;
  onDrop: (acceptedFiles: File[]) => void;
};
export const Dropzone = ({ className, onDrop }: DropzonePropsType) => (
  <Dp onDrop={onDrop}>
    {({ getRootProps, getInputProps }) => (
      <section>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            className={clsx(
              'bg-primary-20/50 border-primary-40 grid cursor-pointer place-items-center border-2 border-dashed',
              className
            )}
          >
            <Icon src={UploadIcon} alt="upload" size="sm" />
          </div>
        </div>
      </section>
    )}
  </Dp>
);

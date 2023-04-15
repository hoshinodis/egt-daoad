import { useState } from 'react';

import { Button } from '@/components/Elements';
import { Dropzone } from '@/components/Elements/Dropzone';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { Title } from '@/components/Elements/Title';
import { FieldWrapper } from '@/components/Form/FieldWrapper';
import { TextField } from '@/components/Form/TextField';

import NewCreativeTitle from '@/assets/title/new-creative.svg';

/**
 * @package
 */
export type CreativeModalPropsType = {
  className?: string;
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  onCreate: (image: File, link: string) => void;
};
/**
 * @package
 */
export const CreativeModal = ({
  className,
  children,
  onClick,
  isOpen,
  onClose,
  onCreate,
}: CreativeModalPropsType) => {
  const [image, setImage] = useState<File | null>(null);

  const [value, setValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleDrop = (acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  };

  const handleClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setImage(null);
    onClose(event);
  };
  const handleCreate = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    if (image) {
      onCreate(image, value);
      handleClose(event);
    }
  };

  return (
    <>
      <Button className={className} color="secondary" onClick={onClick}>
        {children}
      </Button>
      <Modal className="h-[500px]" isOpen={isOpen} onClose={handleClose}>
        <ModalTitle className="h-14">
          <Title src={NewCreativeTitle} alt="new creative" />
        </ModalTitle>
        <ModalContents>
          <div className="flex flex-col gap-4">
            {image === null ? (
              <FieldWrapper label="Upload Creative">
                <Dropzone className="h-[240px]" onDrop={handleDrop} />
              </FieldWrapper>
            ) : (
              <div className="h-[240px]">
                <img
                  className="h-full w-full object-contain"
                  src={window.URL.createObjectURL(image)}
                  alt="preview"
                />
              </div>
            )}
            <TextField
              label="Link"
              placeholder="Please enter link URL here"
              value={value}
              onChange={handleChange}
            />
          </div>
        </ModalContents>
        <ModalActions>
          <Button color="neutral" onClick={handleClose}>
            CANCEL
          </Button>
          <Button color="secondary" onClick={handleCreate}>
            CREATE
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

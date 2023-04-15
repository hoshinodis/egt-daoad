import { useState } from 'react';

import { Button } from '@/components/Elements';
import { Dropzone } from '@/components/Elements/Dropzone';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { Title } from '@/components/Elements/Title';
import { FieldWrapper } from '@/components/Form/FieldWrapper';

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
  onCreate: (image: File) => void;
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

  const handleDrop = (acceptedFiles: File[]) => {
    setImage(acceptedFiles[0]);
  };

  const handleCreate = () => {
    if (image) {
      onCreate(image);
    }
  };

  const handleClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setImage(null);
    onClose(event);
  };

  return (
    <>
      <Button className={className} color="secondary" onClick={onClick}>
        {children}
      </Button>
      <Modal className="h-[430px]" isOpen={isOpen} onClose={handleClose}>
        <ModalTitle className="h-14">
          <Title src={NewCreativeTitle} alt="new creative" />
        </ModalTitle>
        <ModalContents>
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
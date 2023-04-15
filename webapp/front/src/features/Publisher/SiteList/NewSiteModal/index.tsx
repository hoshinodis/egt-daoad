import { useState } from 'react';

import { Button } from '@/components/Elements';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { Title } from '@/components/Elements/Title';
import { TextField } from '@/components/Form/TextField';

import NewSiteTitle from '@/assets/title/new-site.svg';

/**
 * @package
 */
export type NewSiteModalPropsType = {
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  onCreate: (url: string) => void;
  children: React.ReactNode;
};
/**
 * @package
 */
export const NewSiteModal = ({
  className,
  onClick,
  isOpen,
  onClose,
  onCreate,
  children,
}: NewSiteModalPropsType) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setValue('');
    onClose(event);
  };

  const handleCreate = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    onCreate(value);
    handleClose(event);
  };

  return (
    <>
      <Button className={className} color="secondary" onClick={onClick}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalTitle className="h-14">
          <Title src={NewSiteTitle} alt="new site" />
        </ModalTitle>
        <ModalContents>
          <TextField
            label="Site URL"
            value={value}
            onChange={handleChange}
            placeholder="Please enter site URL here"
          />
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

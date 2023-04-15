import { useState } from 'react';

import { Button } from '@/components/Elements';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { Title } from '@/components/Elements/Title';
import { Checkbox } from '@/components/Form/Checkbox';
import { NumberField } from '@/components/Form/NumberField';

import VoteForCreativeTitle from '@/assets/title/vote-for-creative.svg';
import VoteForSiteTitle from '@/assets/title/vote-for-site.svg';

/**
 * @package
 */
export type VoteModalPropsType = {
  className?: string;
  type: 'site' | 'creative';
  children: React.ReactNode;
  url: string;
  maxVp: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  onVote: (checked: boolean, vp: number) => void;
};
/**
 * @package
 */
export const VoteModal = ({
  className,
  type,
  children,
  url,
  maxVp,
  onClick,
  isOpen,
  onClose,
  onVote,
}: VoteModalPropsType) => {
  const [checked, setChecked] = useState(false);
  const handleCheckChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [value, setValue] = useState('');
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleMaxClick = () => {
    setValue(maxVp.toString());
  };

  const handleClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setChecked(false);
    setValue('');
    onClose(event);
  };

  const handleVote = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    onVote(checked, Number(value));
    handleClose(event);
  };

  return (
    <>
      <Button className={className} color="secondary" onClick={onClick}>
        {children}
      </Button>
      <Modal
        className={type === 'site' ? 'h-[350px]' : 'h-[520px]'}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ModalTitle className="h-14">
          <Title
            src={type === 'site' ? VoteForSiteTitle : VoteForCreativeTitle}
            alt={`new ${type}`}
          />
        </ModalTitle>
        <ModalContents className="flex items-center">
          <div className="my-auto grid w-full grid-cols-3 gap-12">
            <div className="col-span-3 flex flex-col">
              {type === 'site' ? (
                <>
                  <div className="text-18-semi text-neutral-100/70">Site URL</div>
                  <div className="text-18-semi text-neutral-100">{url}</div>
                </>
              ) : (
                <div className="relative h-60 p-2">
                  <img className="h-full w-full object-contain" src={url} alt="creative" />
                </div>
              )}
            </div>
            <Checkbox
              className="col-span-1"
              label="What’s your Vote?"
              checked={checked}
              onChange={handleCheckChange}
            />
            <NumberField
              className="col-span-2"
              label="Choose Amount of Voting Power"
              placeholder="Enter Voting Power"
              value={value}
              onMaxClick={handleMaxClick}
              onChange={handleNumberChange}
            />
          </div>
        </ModalContents>
        <ModalActions>
          <Button color="neutral" onClick={handleClose}>
            CANCEL
          </Button>
          <Button color="secondary" onClick={handleVote}>
            VOTE
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

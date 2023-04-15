import { useState } from 'react';

import { Button } from '@/components/Elements';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { Title } from '@/components/Elements/Title';
import { NumberField } from '@/components/Form/NumberField';

import AdsGtStaking from '@/assets/title/adsgt-staking.svg';
import MeGtStaking from '@/assets/title/megt-staking.svg';

export type StakeModalPropsType = {
  className?: string;
  type: 'adsgt' | 'megt';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  maxVp: number;
  onStake: (amount: number) => void;
  children: React.ReactNode;
};
export const StakeModal = ({
  className,
  type,
  onClick,
  isOpen,
  onClose,
  maxVp,
  onStake,
  children,
}: StakeModalPropsType) => {
  const [value, setValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  const handleMaxClick = () => {
    setValue(maxVp.toString());
  };

  const handleClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setValue('');
    onClose(event);
  };

  const handleStake = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    onStake(Number(value));
    handleClose(event);
  };

  return (
    <>
      <Button className={className} color="secondary" onClick={onClick}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalTitle className="h-14">
          <Title src={type === 'adsgt' ? AdsGtStaking : MeGtStaking} alt="stake" />
        </ModalTitle>
        <ModalContents>
          <NumberField
            label="Choose Amount to Stake"
            placeholder="Enter Amount"
            value={value}
            onMaxClick={handleMaxClick}
            onChange={handleChange}
          />
        </ModalContents>
        <ModalActions>
          <Button color="neutral" onClick={handleClose}>
            CANCEL
          </Button>
          <Button color="secondary" onClick={handleStake}>
            STAKE
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
};

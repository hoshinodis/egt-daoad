import { Button } from '@/components/Elements';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';
import { NumberField } from '@/components/Form/NumberField';

export type StakeModalPropsType = {
  className?: string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  value: string;
  onMaxClick: React.MouseEventHandler<HTMLButtonElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  onStake: React.MouseEventHandler<HTMLButtonElement>;
};
export const StakeModal = ({
  className,
  isOpen,
  onClose,
  value,
  onMaxClick,
  onChange,
  onCancel,
  onStake,
}: StakeModalPropsType) => (
  <Modal isOpen={isOpen} onClose={onClose} className={className}>
    <ModalTitle>ADSGT STAKING</ModalTitle>
    <ModalContents>
      <NumberField
        label="Choose Amount to Stake"
        placeholder="Enter Amount"
        value={value}
        onMaxClick={onMaxClick}
        onChange={onChange}
      />
    </ModalContents>
    <ModalActions>
      <Button color="neutral" onClick={onCancel}>
        CANCEL
      </Button>
      <Button color="secondary" onClick={onStake}>
        CANCEL
      </Button>
    </ModalActions>
  </Modal>
);

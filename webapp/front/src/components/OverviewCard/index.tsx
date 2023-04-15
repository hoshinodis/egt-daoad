import { useState } from 'react';

import clsx from 'clsx';

import { Card, Icon } from '@/components/Elements';
import { StakeModal } from '@/components/OverviewCard/StakeModal';

export type OverviewCardPropsType = {
  className?: string;
  type?: 'advertiser' | 'publisher';
  children: React.ReactNode;
  maxVp?: number;
  title: string;
  icon: string;
  onStake?: (amount: number) => void;
};
export const OverviewCard = ({
  className,
  type,
  children,
  maxVp,
  title,
  icon,
  onStake,
}: OverviewCardPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Card className={clsx('relative flex flex-col justify-around px-6', className)}>
      {type && onStake && maxVp !== undefined && (
        <StakeModal
          className="absolute top-5 right-0"
          type={type === 'advertiser' ? 'adsgt' : 'megt'}
          onClick={handleOpen}
          isOpen={isOpen}
          onClose={handleClose}
          maxVp={maxVp}
          onStake={onStake}
        >
          STAKE
        </StakeModal>
      )}
      <Icon className="absolute bottom-0 right-3 p-0" size="sm" src={icon} alt={title} />
      <p className="text-neutral-10/70 text-18-semi">{title}</p>
      {children}
    </Card>
  );
};

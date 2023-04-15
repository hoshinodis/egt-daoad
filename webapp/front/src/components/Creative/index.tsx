import { useMemo, useState } from 'react';

import clsx from 'clsx';

import { Card } from '@/components/Elements';
import { Band } from '@/components/Elements/Band';
import { VoteModal } from '@/components/VoteModal';

const getTimeDifference = (date: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.abs(Math.round((now.getTime() - date.getTime()) / 1000));

  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  const hoursString = hours > 0 ? `${hours}h ` : '';
  const minutesString = minutes > 0 ? `${minutes}m ` : '';
  const secondsString = `${seconds}s`;

  return `${hoursString}${minutesString}${secondsString}`;
};

export type CreativePropsType = {
  className?: string;
  id: string;
  createdAt: Date;
  expires?: Date;
  image: string;
  status: 'process' | 'passed' | 'rejected';
  ok?: number;
  ng?: number;
  maxVp: number;
  onVote?: (checked: boolean, vp: number) => void;
};
export const Creative = ({
  className,
  id,
  createdAt,
  expires,
  image,
  status,
  ok,
  ng,
  maxVp,
  onVote,
}: CreativePropsType) => {
  const isVote = useMemo(
    () =>
      status === 'process' &&
      ok !== undefined &&
      ng !== undefined &&
      expires !== undefined &&
      onVote !== undefined,
    [status, ok, ng, expires, onVote]
  );

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="flex">
        <Band color={status} direction="vertical">
          VOTE IN {status}
        </Band>
        <Card className="grow">
          <div className="flex">
            <div className="w-1/3 px-2">
              <div className="text-18-semi text-neutral-10/70">Creative ID</div>
              <div className="text-18-bold text-neutral-10">{id}</div>
            </div>
            <div className="w-1/3 px-2">
              <div className="text-18-semi text-neutral-10/70">Created At</div>
              <div className="text-18-bold text-neutral-10">
                {createdAt
                  .toLocaleString('ja-JP', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                  .replace(/-/g, '/')
                  .replace('T', ' ')}
              </div>
            </div>
            {isVote && (
              <div className="w-1/3 px-2">
                <div className="text-18-semi text-neutral-10/70">Expires</div>
                <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
                  {getTimeDifference(expires!)}
                </div>
              </div>
            )}
          </div>
          <div className={clsx('relative p-2', isVote ? 'h-48' : 'h-60')}>
            <img className="h-full w-full object-contain" src={image} alt="creative" />
          </div>
        </Card>
      </div>
      {isVote && (
        <div className="flex">
          <Band className="flex flex-1 justify-end" color={status}>
            <div>
              <span>OK</span>
              <span>{ok}%</span>
              <span>NG</span>
              <span>{ng}%</span>
            </div>
          </Band>
          <VoteModal
            type="creative"
            url={image}
            onClick={handleOpenModal}
            isOpen={isOpen}
            onClose={handleCloseModal}
            maxVp={maxVp}
            onVote={onVote!}
          >
            VOTE
          </VoteModal>
        </div>
      )}
    </div>
  );
};

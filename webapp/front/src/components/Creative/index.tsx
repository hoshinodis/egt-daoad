import { useMemo, useState } from 'react';

import clsx from 'clsx';

import { Card } from '@/components/Elements';
import { Band } from '@/components/Elements/Band';
import { Title } from '@/components/Elements/Title';
import { VoteModal } from '@/components/VoteModal';

import PassedTitle from '@/assets/title/passed.svg';
import RejectedTitle from '@/assets/title/rejected.svg';
import VoteInProcessTitle from '@/assets/title/vote-in-process.svg';

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
  link: string;
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
  link,
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
          <Title
            className="flex h-48 w-48 translate-y-[370%] -rotate-90 justify-end"
            src={
              status === 'process'
                ? VoteInProcessTitle
                : status === 'passed'
                ? PassedTitle
                : RejectedTitle
            }
            alt={
              status === 'process' ? 'vote in process' : status === 'passed' ? 'passed' : 'rejected'
            }
          />
        </Band>
        <Card className="grow">
          <div className="flex py-[12px]">
            <div className="w-32 px-2">
              <div className="text-18-semi text-neutral-10/70">Creative ID</div>
              <div className="text-18-bold text-neutral-10">{id}</div>
            </div>
            <div className="flex-1 px-2">
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
            <div className="w-32 px-2">
              {isVote && (
                <>
                  <div className="text-18-semi text-neutral-10/70">Expires</div>
                  <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
                    {getTimeDifference(expires!)}
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="px-2">
            <div className="text-18-semi text-neutral-10/70">Link</div>
            <div className="text-18-bold text-neutral-10">{link}</div>
          </div>
          <div className={clsx('relative p-2', isVote ? 'h-48' : 'h-60')}>
            <img className="h-full w-full object-contain" src={image} alt="creative" />
          </div>
        </Card>
      </div>
      {isVote && (
        <div className="flex">
          <Band className="flex flex-1 justify-end" color={status}>
            <div className="flex gap-6">
              <div className="flex gap-3">
                <p className="text-18-semi text-neutral-10/70 pt-1">OK</p>
                <p className="text-22-semi text-neutral-10">{ok}%</p>
              </div>
              <div className="flex gap-3">
                <div className="text-18-semi text-neutral-10/70 pt-1">NG</div>
                <div className="text-22-semi text-neutral-10">{ng}%</div>
              </div>
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

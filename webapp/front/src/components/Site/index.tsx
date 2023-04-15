import { useMemo, useState } from 'react';

import clsx from 'clsx';

import { Button, Card } from '@/components/Elements';
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

export type SitePropsType = {
  className?: string;
  id: string;
  url: string;
  createdAt: Date;
  expires?: Date;
  status: 'process' | 'passed' | 'rejected';
  ok: number;
  ng: number;
  onCopyTag?: React.MouseEventHandler<HTMLButtonElement>;
  maxVp: number;
  onVote?: (checked: boolean, vp: number) => void;
};
export const Site = ({
  className,
  id,
  url,
  createdAt,
  expires,
  status,
  ok,
  ng,
  onCopyTag,
  maxVp,
  onVote,
}: SitePropsType) => {
  console.log('id', id);
  const isVote = useMemo(
    () => status === 'process' && expires !== undefined && onVote !== undefined,
    [status, expires, onVote]
  );
  const isCopyTag = useMemo(() => status === 'passed' && onCopyTag, [onCopyTag, status]);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className={clsx('flex flex-col', className)}>
      <Card className="flex py-[18px]">
        <div className={clsx('w-24 px-2')}>
          <div className="text-18-semi text-neutral-10/70">Site ID</div>
          <div className="text-18-bold text-neutral-10">{id}</div>
        </div>
        <div className={clsx('flex-[2_1_0%] px-2')}>
          <div className="text-18-semi text-neutral-10/70">Site URL</div>
          <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {url}
          </div>
        </div>
        <div className={clsx('flex-1 px-2')}>
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
      </Card>
      <div className="flex">
        <Band
          className={clsx('flex justify-between', isCopyTag ? 'w-3/4' : 'w-full')}
          color={status}
        >
          <Title
            src={
              status === 'process'
                ? VoteInProcessTitle
                : status === 'passed'
                ? PassedTitle
                : RejectedTitle
            }
            alt={
              status === 'process'
                ? 'vote in progress'
                : status === 'passed'
                ? 'passed'
                : 'rejected'
            }
          />
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
        {isCopyTag && (
          <Button className="h-12 w-1/4" color="neutral" onClick={onCopyTag!}>
            COPY AD TAG
          </Button>
        )}
        {isVote && (
          <VoteModal
            type="site"
            url={url}
            onClick={handleOpenModal}
            isOpen={isOpen}
            onClose={handleCloseModal}
            maxVp={maxVp}
            onVote={onVote!}
          >
            VOTE
          </VoteModal>
        )}
      </div>
    </div>
  );
};

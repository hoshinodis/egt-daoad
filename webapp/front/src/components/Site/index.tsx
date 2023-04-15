import { useMemo } from 'react';

import clsx from 'clsx';

import { Button, Card } from '@/components/Elements';
import { Band } from '@/components/Elements/Band';

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
  onVote?: React.MouseEventHandler<HTMLButtonElement>;
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
  onVote,
}: SitePropsType) => {
  const isVote = useMemo(
    () => status === 'process' && expires !== undefined && onVote !== undefined,
    [status, expires, onVote]
  );
  const isCopyTag = useMemo(() => status === 'passed' && onCopyTag, [onCopyTag, status]);

  return (
    <div className={clsx('flex flex-col', className)}>
      <Card className="flex">
        <div className={clsx('px-2', isVote ? 'w-1/4' : 'w-1/3')}>
          <div className="text-18-semi text-neutral-10/70">Site ID</div>
          <div className="text-18-bold text-neutral-10">{id}</div>
        </div>
        <div className={clsx('px-2', isVote ? 'w-1/4' : 'w-1/3')}>
          <div className="text-18-semi text-neutral-10/70">Site URL</div>
          <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
            {url}
          </div>
        </div>
        <div className={clsx('px-2', isVote ? 'w-1/4' : 'w-1/3')}>
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
          <div className="w-1/4 px-2">
            <div className="text-18-semi text-neutral-10/70">Expires</div>
            <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
              {getTimeDifference(expires!)}
            </div>
          </div>
        )}
      </Card>
      <div className="flex">
        <Band
          className={clsx('flex justify-between', isCopyTag ? 'w-3/4' : 'w-full')}
          color={status}
        >
          <div>VOTE IN {status}</div>
          <div>
            <span>OK</span>
            <span>{ok}%</span>
            <span>NG</span>
            <span>{ng}%</span>
          </div>
        </Band>
        {isCopyTag && (
          <Button className="h-12 w-1/4" color="neutral" onClick={onCopyTag!}>
            COPY AD TAG
          </Button>
        )}
        {isVote && (
          <Button className="h-12 w-1/4" color="secondary" onClick={onVote!}>
            VOTE
          </Button>
        )}
      </div>
    </div>
  );
};

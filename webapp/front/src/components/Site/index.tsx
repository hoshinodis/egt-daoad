import clsx from 'clsx';

import { Button, Card } from '@/components/Elements';
import { Band } from '@/components/Elements/Band';

export type SitePropsType = {
  className?: string;
  id: string;
  url: string;
  createdAt: Date;
  status: 'process' | 'passed' | 'rejected';
  ok: number;
  ng: number;
  tag?: string;
};
export const Site = ({ className, id, url, createdAt, status, ok, ng, tag }: SitePropsType) => (
  <div className={clsx('flex flex-col', className)}>
    <Card className="flex">
      <div className="w-1/3 px-2">
        <div className="text-18-semi text-neutral-10/70">Site ID</div>
        <div className="text-18-bold text-neutral-10">{id}</div>
      </div>
      <div className="w-1/3 px-2">
        <div className="text-18-semi text-neutral-10/70">Site URL</div>
        <div className="text-18-bold text-neutral-10 overflow-hidden text-ellipsis whitespace-nowrap">
          {url}
        </div>
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
    </Card>
    <div className="flex">
      <Band
        className={clsx('flex justify-between', status === 'passed' ? 'w-3/4' : 'w-full')}
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
      {status === 'passed' && (
        <Button className="h-12 w-1/4" color="neutral" onClick={() => tag}>
          COPY AD TAG
        </Button>
      )}
    </div>
  </div>
);

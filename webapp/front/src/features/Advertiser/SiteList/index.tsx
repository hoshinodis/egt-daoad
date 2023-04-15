import { useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';

/**
 * @package
 */
export const SiteList = () => {
  const [sites] = useState<
    {
      id: string;
      status: 'process' | 'passed' | 'rejected';
      url: string;
      createdAt: Date;
      ok: number;
      ng: number;
      expires?: Date;
      onVote: React.MouseEventHandler<HTMLButtonElement>;
    }[]
  >([
    {
      id: '0001',
      status: 'process',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      expires: new Date(new Date().getTime() + Math.random() * 1000000),
      onVote: () => alert('vote'),
    },
    {
      id: '0002',
      status: 'passed',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      onVote: () => alert('vote'),
    },
    {
      id: '0003',
      status: 'rejected',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      onVote: () => alert('vote'),
    },
  ]);

  return (
    <>
      <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
      <div className="flex flex-col gap-12">
        {sites.map((site) => (
          <Site key={site.id} {...site} />
        ))}
      </div>
    </>
  );
};

import { useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';

/**
 * @package
 */
export const SiteList = () => {
  const [maxVp] = useState(80);

  const handleVote = (id: string) => (checked: boolean, vp: number) => {
    alert(`id: ${id}, checked: ${checked ? 'true' : 'false'}, vp: ${vp}`);
  };

  const [sites] = useState<
    {
      id: string;
      status: 'process' | 'passed' | 'rejected';
      url: string;
      createdAt: Date;
      ok: number;
      ng: number;
      expires?: Date;
      onVote: (checked: boolean, vp: number) => void;
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
      onVote: handleVote('0001'),
    },
    {
      id: '0002',
      status: 'passed',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      onVote: handleVote('0002'),
    },
    {
      id: '0003',
      status: 'rejected',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      onVote: handleVote('0003'),
    },
  ]);

  return (
    <>
      <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
      <div className="flex flex-col gap-12">
        {sites.map((site) => (
          <Site key={site.id} {...site} maxVp={maxVp} />
        ))}
      </div>
    </>
  );
};

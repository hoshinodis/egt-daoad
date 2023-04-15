import { useState } from 'react';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import VotingListOfCreatives from '@/assets/title/voting-list-of-creatives.svg';

/**
 * @package
 */
export const CreativeList = () => {
  const [creatives] = useState<
    {
      id: string;
      status: 'process' | 'passed' | 'rejected';
      image: string;
      createdAt: Date;
      expires?: Date;
      ok?: number;
      ng?: number;
      onVote?: React.MouseEventHandler<HTMLButtonElement>;
    }[]
  >([
    {
      id: '0001',
      status: 'process',
      image: 'https://picsum.photos/500/200',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      expires: new Date(new Date().getTime() + Math.random() * 1000000),
      ok: 50,
      ng: 50,
      onVote: () => {
        alert('vote');
      },
    },
    {
      id: '0002',
      status: 'passed',
      image: 'https://picsum.photos/500/200',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
    },
    {
      id: '0003',
      status: 'rejected',
      image: 'https://picsum.photos/500/200',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
    },
  ]);

  return (
    <>
      <Title className="my-8" src={VotingListOfCreatives} alt="my creative" />
      <div className="flex flex-col gap-12">
        {creatives.map((creative) => (
          <Creative key={creative.id} {...creative} />
        ))}
      </div>
    </>
  );
};

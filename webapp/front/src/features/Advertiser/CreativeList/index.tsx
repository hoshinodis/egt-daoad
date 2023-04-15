import { useState } from 'react';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import MyCreativesTitle from '@/assets/title/my-creatives.svg';

/**
 * @package
 */
export const CreativeList = () => {
  const [creatives] = useState<
    { id: string; status: 'process' | 'passed' | 'rejected'; image: string; createdAt: Date }[]
  >([
    {
      id: '0001',
      status: 'process',
      image: 'https://picsum.photos/500/200',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
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
      <Title className="my-8" src={MyCreativesTitle} alt="my creative" />
      <div className="flex flex-col gap-12">
        {creatives.map((creative) => (
          <Creative key={creative.id} {...creative} />
        ))}
      </div>
    </>
  );
};

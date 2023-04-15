import { useState } from 'react';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import { CreativeModal } from '@/features/Advertiser/CreativeList/CreativeModal';

import MyCreativesTitle from '@/assets/title/my-creatives.svg';

/**
 * @package
 */
export const CreativeList = () => {
  const [maxVp] = useState(80);

  const [creatives] = useState<
    {
      id: string;
      status: 'process' | 'passed' | 'rejected';
      image: string;
      link: string;
      createdAt: Date;
    }[]
  >([
    {
      id: '0001',
      status: 'process',
      image: 'https://picsum.photos/500/200',
      link: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
    },
    {
      id: '0002',
      status: 'passed',
      image: 'https://picsum.photos/500/200',
      link: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
    },
    {
      id: '0003',
      status: 'rejected',
      image: 'https://picsum.photos/500/200',
      link: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickNewCreative = () => setIsOpen(true);

  const handleModalClose = () => setIsOpen(false);

  const handleCreate = (file: File, link: string) => alert(`create${file.name} ${link}`);

  return (
    <>
      <div className="flex justify-between">
        <Title className="my-8" src={MyCreativesTitle} alt="my creative" />
        <div className="flex items-center">
          <CreativeModal
            onClick={handleClickNewCreative}
            isOpen={isOpen}
            onClose={handleModalClose}
            onCreate={handleCreate}
          >
            NEW CREATIVE
          </CreativeModal>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {creatives.map((creative) => (
          <Creative key={creative.id} {...creative} maxVp={maxVp} />
        ))}
      </div>
    </>
  );
};

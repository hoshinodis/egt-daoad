import { useState } from 'react';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import { CreativeModal } from '@/features/Advertiser/CreativeList/CreativeModal';

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

  const [isOpen, setIsOpen] = useState(false);

  const handleClickNewCreative = () => setIsOpen(true);

  const handleModalClose = () => setIsOpen(false);

  const handleCreate = (file: File) => alert(`create${file.name}`);

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
          <Creative key={creative.id} {...creative} />
        ))}
      </div>
    </>
  );
};

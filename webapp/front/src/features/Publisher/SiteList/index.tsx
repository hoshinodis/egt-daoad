import { useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import { NewSiteModal } from '@/features/Publisher/SiteList/NewSiteModal';

import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';

/**
 * @package
 */
export const SiteList = () => {
  const [maxVp] = useState(80);

  const [sites] = useState<
    {
      id: string;
      status: 'process' | 'passed' | 'rejected';
      url: string;
      createdAt: Date;
      ok: number;
      ng: number;
      onCopyTag?: React.MouseEventHandler<HTMLButtonElement>;
    }[]
  >([
    {
      id: '0001',
      status: 'process',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
    },
    {
      id: '0002',
      status: 'passed',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
      onCopyTag: () => alert('copy'),
    },
    {
      id: '0003',
      status: 'rejected',
      url: 'https://example.com',
      createdAt: new Date(Math.floor(Math.random() * new Date().getTime())),
      ok: 50,
      ng: 50,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCreate = (url: string) => {
    alert(`create: ${url}`);
  };

  return (
    <>
      <div className="flex justify-between">
        <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
        <div className="flex items-center">
          {/* <Button color="secondary" onClick={handleNewSite}>
            NEW SITE
          </Button> */}
          <NewSiteModal
            onClick={handleOpen}
            isOpen={isOpen}
            onClose={handleClose}
            onCreate={handleCreate}
          >
            NEW SITE
          </NewSiteModal>
        </div>
      </div>
      <div className="flex flex-col gap-12">
        {sites.map((site) => (
          <Site key={site.id} {...site} maxVp={maxVp} />
        ))}
      </div>
    </>
  );
};

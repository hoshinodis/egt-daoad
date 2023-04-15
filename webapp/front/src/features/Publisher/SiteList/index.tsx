import react, { useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import { NewSiteModal } from '@/features/Publisher/SiteList/NewSiteModal';

import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setSiteList } from '@/slice/appSlice';

/**
 * @package
 */
export const SiteList = () => {
  const [maxVp] = useState(80);

  const sites = useSelector((state: RootState) => state.app.siteList)
  const contractSites = useSelector((state: RootState) => state.app.contractSiteList)

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCreate = (url: string) => {
    alert(`create: ${url}`);
  };

  const dispatch = useDispatch()

  react.useEffect(() => {
    fetch("/api/sites").then((res) => { res.text().then(res => dispatch(setSiteList(Array(res)))) }).catch(() => alert("something went wrong"))
  }, [])

  const getStatusText = (status: number) => {
    if (status === 1) {
      return "passed"
    }

    if (status === 2) {
      return "rejected"
    }

    return "process"
  }

  return (
    <>
      <div className="flex justify-between">
        <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
        <div className="flex items-center">
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
        {contractSites.map((contractSite, i) =>
          <Site
            key={contractSite.id}
            id={contractSite.id}
            url={sites[i].url}
            createdAt={contractSite.createdAt}
            status={getStatusText(sites[i].status)}
            expires={contractSite.endAt}
            ok={contractSite.agreeVoteAmount}
            ng={contractSite.rejectVoteAmount}
            maxVp={maxVp}
          />
        )}
      </div >
    </>
  );
};

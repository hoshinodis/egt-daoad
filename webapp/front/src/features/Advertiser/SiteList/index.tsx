import react, { useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setSiteList } from '@/slice/appSlice';

/**
 * @package
 */
export const SiteList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const handleVote = (id: string) => (checked: boolean, vp: number) => {
    alert(`id: ${id}, checked: ${checked ? 'true' : 'false'}, vp: ${vp}`);
  };

  const sites = useSelector((state: RootState) => state.app.siteList)
  const contractSites = useSelector((state: RootState) => state.app.contractSiteList)

  const getStatusText = (status: number) => {
    if (status === 1) {
      return "passed"
    }

    if (status === 2) {
      return "rejected"
    }

    return "process"
  }

  const dispatch = useDispatch()

  react.useEffect(() => {
    fetch("/api/sites").then((res) => { res.text().then(res => dispatch(setSiteList(Array(res)))) }).catch((err) => { console.error(err); alert("something went wrong") })
  }, [])

  return (
    <>
      <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
      <div className="flex flex-col gap-12">
        {contractSites.map((contractSite, i) => (
          <Site
            key={contractSite[i].id}
            id={contractSite[i].id}
            url={sites[i].url}
            createdAt={new Date()}
            status={getStatusText(sites[i].status)}
            expires={contractSite[i].endAt}
            ok={contractSite[i].agreeVoteAmount}
            ng={contractSite[i].rejectVoteAmount}
            maxVp={maxVp}
          />
        ))}
      </div>
    </>
  );
};

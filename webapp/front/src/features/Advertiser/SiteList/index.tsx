import react from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import { RootState } from '@/app/store';
import VotingListOfSitesTitle from '@/assets/title/voting-list-of-sites.svg';
import { setSiteList } from '@/slice/appSlice';

/**
 * @package
 */
export const SiteList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const handleVote = (id: string) => (checked: boolean, vp: number) => {
    alert(`id: ${id}, checked: ${checked ? 'true' : 'false'}, vp: ${vp}`);
  };

  const sites = useSelector((state: RootState) => state.app.siteList);
  const contractSites = useSelector((state: RootState) => state.app.contractSiteList);

  const getStatusText = (status: number) => {
    if (status === 1) {
      return 'passed';
    }

    if (status === 2) {
      return 'rejected';
    }

    return 'process';
  };

  const dispatch = useDispatch();

  react.useEffect(() => {
    fetch('/api/sites')
      .then((res) => {
        res.text().then((res) => dispatch(setSiteList(JSON.parse(res))));
      })
      .catch((err) => {
        console.error(err);
        alert('something went wrong');
      });
  }, []);
  console.log(contractSites);
  console.log(sites);
  console.log(contractSites.length && contractSites[0].createdAt.toNumber());

  return (
    <>
      <Title className="my-8" src={VotingListOfSitesTitle} alt="voting list of sites" />
      <div className="flex flex-col gap-12">
        {contractSites.map((contractSite, i) => (
          <Site
            key={contractSite.id !== undefined ? contractSite.id.toNumber() : contractSite.id}
            id={
              contractSite.id !== undefined
                ? contractSite.id.toNumber().toString()
                : contractSite.id
            }
            url={contractSite.siteUrl}
            createdAt={
              new Date(
                contractSite.createdAt !== undefined ? contractSite.createdAt.toNumber() * 1000 : 0
              )
            }
            status={sites.length > i ? getStatusText(sites[i].status) : 'process'}
            expires={
              new Date(contractSite.endAt !== undefined ? contractSite.endAt.toNumber() * 1000 : 0)
            }
            ok={
              contractSite.agreeVoteAmount !== undefined
                ? contractSite.agreeVoteAmount.toNumber()
                : 0
            }
            ng={
              contractSite.rejectVoteAmount !== undefined
                ? contractSite.rejectVoteAmount.toNumber()
                : 0
            }
            maxVp={maxVp}
          />
        ))}
      </div>
    </>
  );
};

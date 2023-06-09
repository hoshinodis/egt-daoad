import react, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Title } from '@/components/Elements/Title';
import { Site } from '@/components/Site';

import { NewSiteModal } from '@/features/Publisher/SiteList/NewSiteModal';

import { getGasPrice, connectSigner } from '@/utils/contract';

import { RootState } from '@/app/store';
import MySitesTitle from '@/assets/title/my-sites.svg';
import { setSiteList } from '@/slice/appSlice';

/**
 * @package
 */
export const SiteList = () => {
  const maxVp = useSelector((state: RootState) => state.app.MeGTVP);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const address = useSelector((state: RootState) => state.app.address);
  const sites = useSelector((state: RootState) => state.app.siteList);
  const isAdvertiser = useSelector((state: RootState) => state.app.isAdvertiser);
  const daoContract = useSelector((state: RootState) => state.app.daoContract);
  const endDate = useSelector((state: RootState) => state.app.endDate);
  const contractSites = useSelector((state: RootState) => state.app.contractSiteList);

  const handleCreate = async (url: string) => {
    const unixTime = Math.floor(new Date().getTime() / 1000) + endDate * 60;
    try {
      await fetch('/api/sites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: sites.length + 1,
          wallet_address: address,
          url
        }),
      });

      const gasPrice = await getGasPrice();

      const tx = await connectSigner(daoContract).createContent(false, unixTime, url, {
        gasLimit: 5000000,
        gasPrice,
      });

      await tx.wait();
      alert('Create Successfully');
    } catch (e) {
      console.log('Err: ', e);
    }
  };

  const dispatch = useDispatch();

  react.useEffect(() => {
    fetch('/api/sites')
      .then((res) => {
        res.text().then((res) => dispatch(setSiteList(Array(res))));
      })
      .catch(() => alert('something went wrong'));
  }, []);

  const getStatusText = (status: number) => {
    if (status === 1) {
      return 'passed';
    }

    if (status === 2) {
      return 'rejected';
    }

    return 'process';
  };

  return (
    <>
      <div className="flex justify-between">
        <Title className="my-8" src={MySitesTitle} alt="voting list of sites" />
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

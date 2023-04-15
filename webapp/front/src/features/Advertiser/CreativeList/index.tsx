import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import { CreativeModal } from '@/features/Advertiser/CreativeList/CreativeModal';

import { connectSigner, getGasPrice } from '@/utils/contract';

import { RootState } from '@/app/store';
import MyCreativesTitle from '@/assets/title/my-creatives.svg';
import { setAdvertiserList, setIsCreate } from '@/slice/appSlice';

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * @package
 */
export const CreativeList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickNewCreative = () => setIsOpen(true);

  const handleModalClose = () => setIsOpen(false);

  const address = useSelector((state: RootState) => state.app.address);
  const creatives = useSelector((state: RootState) => state.app.advertiserList);
  const contractCreatives = useSelector((state: RootState) => state.app.contractAdvertiserList);

  const daoContract = useSelector((state: RootState) => state.app.daoContract);
  const isAdvertiser = useSelector((state: RootState) => state.app.isAdvertiser);
  const endDate = useSelector((state: RootState) => state.app.endDate);
  const dispatch = useDispatch();

  const handleCreate = async (file: File, url: string) => {
    const unixTime = Math.floor(new Date().getTime() / 1000) + endDate * 60;
    try {
      const b64 = await toBase64(file);

      console.log(b64);
      await fetch('/api/creatives', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: creatives.length + 1,
          wallet_address: address,
          link: url,
          img: b64,
        }),
      });

      const gasPrice = await getGasPrice();

      console.log(unixTime, url);

      const tx = await connectSigner(daoContract).createContent(true, unixTime, url, {
        gasLimit: 5000000,
        gasPrice,
      });

      await tx.wait();
      setIsCreate(false);
      alert('Create Successfully');
    } catch (e) {
      console.log('Err: ', e);
    }
  };

  const getStatusText = (status: number) => {
    if (status === 1) {
      return 'passed';
    }

    if (status === 2) {
      return 'rejected';
    }

    return 'process';
  };

  useEffect(() => {
    fetch('/api/creatives')
      .then((res) => {
        res.text().then((res) => dispatch(setAdvertiserList(JSON.parse(res))));
      })
      .catch(() => alert('something went wrong'));
  }, []);

  console.log('creative1', contractCreatives);
  console.log('creative2', creatives);

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
        {contractCreatives.map((contractCreative, i) => (
          <Creative
            key={
              contractCreative.id !== undefined
                ? contractCreative.id.toNumber()
                : contractCreative.id
            }
            id={
              contractCreative.id !== undefined
                ? contractCreative.id.toNumber().toString()
                : contractCreative.id
            }
            createdAt={
              new Date(
                contractCreative.createdAt !== undefined
                  ? contractCreative.createdAt.toNumber() * 1000
                  : 0
              )
            }
            expires={
              new Date(
                contractCreative.endAt !== undefined ? contractCreative.endAt.toNumber() * 1000 : 0
              )
            }
            link={contractCreative.siteUrl}
            image={creatives.length > i ? creatives[i].img : 'image'}
            status={creatives.length > i ? getStatusText(creatives[i].status) : 'process'}
            ok={
              contractCreative.agreeVoteAmount !== undefined
                ? contractCreative.agreeVoteAmount.toNumber()
                : 0
            }
            ng={
              contractCreative.rejectVoteAmount !== undefined
                ? contractCreative.rejectVoteAmount.toNumber()
                : 0
            }
            maxVp={maxVp}
          />
        ))}
      </div>
    </>
  );
};

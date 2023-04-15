import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import { getGasPrice, connectSigner } from '@/utils/contract';

import { RootState } from '@/app/store';
import VotingListOfCreatives from '@/assets/title/voting-list-of-creatives.svg';
import { setAdvertiserList } from '@/slice/appSlice';

/**
 * @package
 */
export const CreativeList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const address = useSelector((state: RootState) => state.app.address);
  const sites = useSelector((state: RootState) => state.app.siteList);
  const isAdvertiser = useSelector((state: RootState) => state.app.isAdvertiser);
  const daoContract = useSelector((state: RootState) => state.app.daoContract);
  const endDate = useSelector((state: RootState) => state.app.endDate);

  const handleVote = (id: string) => async (checked: boolean, vp: number) => {
    const unixTime = Math.floor(new Date().getTime() / 1000) + endDate * 60;
    try {
      const gasPrice = await getGasPrice();

      const tx = await connectSigner(daoContract).vote(Number(id), checked, vp, {
        gasLimit: 5000000,
        gasPrice,
      });

      await tx.wait();
      alert('Vote Successfully');
    } catch (e) {
      console.log('Err: ', e);
    }
  };

  const dispatch = useDispatch();

  const creatives = useSelector((state: RootState) => state.app.advertiserList);
  const contractCreatives = useSelector((state: RootState) => state.app.contractAdvertiserList);

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
        res.text().then((res) => dispatch(setAdvertiserList(Array(res))));
      })
      .catch(() => alert('something went wrong'));
  }, []);

  return (
    <>
      <Title className="my-8" src={VotingListOfCreatives} alt="my creative" />
      <div className="flex flex-col gap-12">
        {contractCreatives.map((contractCreative, i) => (
          <Creative
            key={contractCreative.id}
            id={contractCreative.id}
            createdAt={contractCreative.createdAt}
            expires={contractCreative.endAt}
            link="https://example.com" // TODO
            image={creatives[i].img}
            status={getStatusText(creatives[i].status)}
            ok={contractCreative.agreeVoteAmount}
            ng={contractCreative.rejectVoteAmount}
            maxVp={maxVp}
            onVote={handleVote(contractCreative.id)}
          />
        ))}
      </div>
    </>
  );
};

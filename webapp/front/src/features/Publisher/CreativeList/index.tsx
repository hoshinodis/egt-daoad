import { useEffect } from 'react';

import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';
import VotingListOfCreatives from '@/assets/title/voting-list-of-creatives.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setAdvertiserList } from '@/slice/appSlice';

/**
 * @package
 */
export const CreativeList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const handleVote = (id: string) => (checked: boolean, vp: number) => {
    alert(`id: ${id}, checked: ${checked ? 'true' : 'false'}, vp: ${vp}`);
  };

  const dispatch = useDispatch()

  const creatives = useSelector((state: RootState) => state.app.advertiserList)
  const contractCreatives = useSelector((state: RootState) => state.app.contractAdvertiserList)

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
    fetch("/api/creatives").then((res) => { res.text().then(res => dispatch(setAdvertiserList(Array(res)))) }).catch(() => alert("something went wrong"))
  }, [])

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
          />
        ))}
      </div>
    </>
  );
};

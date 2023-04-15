import { Creative } from '@/components/Creative';
import { Title } from '@/components/Elements/Title';

import { CreativeModal } from '@/features/Advertiser/CreativeList/CreativeModal';

import MyCreativesTitle from '@/assets/title/my-creatives.svg';
import { setAdvertiserList, setIsCreate } from '@/slice/appSlice';
import { connectSigner } from '@/utils/contract';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { useEffect, useState } from 'react';

/**
 * @package
 */
export const CreativeList = () => {
  const [maxVp] = useState(80);

  const [isOpen, setIsOpen] = useState(false);

  const handleClickNewCreative = () => setIsOpen(true);

  const handleModalClose = () => setIsOpen(false);

  const handleCreate = (file: File) => alert(`create${file.name}`);
  const creatives = useSelector((state: RootState) => state.app.advertiserList)
  const contractCreatives = useSelector((state: RootState) => state.app.contractAdvertiserList)

  const daoContract = useSelector((state: RootState) => state.app.daoContract)
  const isAdvertiser = useSelector((state: RootState) => state.app.isAdvertiser)
  const endDate = useSelector((state: RootState) => state.app.endDate)
  const dispatch = useDispatch()

  const handleNewCreative = async () => {
    const unixTime = Math.floor(new Date().getTime() / 1000) + endDate * 60;
    try {
      const tx = await connectSigner(daoContract).createContent(
        isAdvertiser,
        unixTime
      );

      await tx.wait();
      setIsCreate(false);
      alert("Create Successfully");
    } catch (e) {
      console.log("Err: ", e)
    }
  };

  const getStatusText = (status: number) => {
    if (status === 1) {
      return "passed"
    }

    if (status === 2) {
      return "rejected"
    }

    return "process"
  }

  useEffect(() => {
    fetch("/api/creatives").then((res) => { res.text().then(res => dispatch(setAdvertiserList(Array(res)))) }).catch(() => alert("something went wrong"))
  }, [])

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

        {
          contractCreatives.map((contractCreative, i) => (
            <Creative
              key={contractCreative.id}
              id={contractCreative.id}
              createdAt={contractCreative.createdAt}
              expires={contractCreative.endAt}
              image={creatives[i].img}
              status={getStatusText(creatives[i].status)}
              ok={contractCreative.agreeVoteAmount}
              ng={contractCreative.rejectVoteAmount}
              maxVp={maxVp}
            />
          ))
        }
      </div>
    </>
  );
};

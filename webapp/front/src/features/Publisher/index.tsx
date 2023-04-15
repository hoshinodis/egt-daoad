import { useNavigate } from 'react-router-dom';

import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import { CreativeList } from '@/features/Publisher/CreativeList';
import { OverviewList } from '@/features/Publisher/OverviewList';
import { SiteList } from '@/features/Publisher/SiteList';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAdvertiser, setIsAdmin, setIsCreate, setIsStaking, setIsVote } from '@/slice/appSlice';
import { RootState } from '@/app/store';

export const Publisher = () => {
  const address = useSelector((state: RootState) => state.app.address);

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleDisonnect = () => {
    navigate('/welcome');
    dispatch(setIsAdvertiser(true));
    dispatch(setIsAdmin(false));
    dispatch(setIsCreate(false));
    dispatch(setIsStaking(false));
    dispatch(setIsVote(''));
  };

  return (
    <Container>
      <Header address={address} current="publisher" onDisconnect={handleDisonnect} />
      <OverviewList />
      <div className="flex gap-12">
        <div className="flex-[2_1_0%]">
          <CreativeList />
        </div>
        <div className="flex-[3_1_0%]">
          <SiteList />
        </div>
      </div>
    </Container>
  );
};

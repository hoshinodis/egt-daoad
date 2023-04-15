import { useNavigate } from 'react-router-dom';

import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import TitleIcon from '@/assets/icons/title.svg';

export const Welcome = () => {
  const navigate = useNavigate();
  const handleConnect = () => {
    navigate('/advertiser');
  };
  return (
    <Container className="relative">
      <Header className="relative z-10" onConnect={handleConnect} />
      <div className="absolute top-0 left-0 grid h-screen w-screen place-items-center">
        <div className="relative mt-40 flex w-3/4 flex-col">
          <img className="ml-[8vw] object-contain" src={TitleIcon} alt="daoad" />
          <p className="text-24-medium absolute bottom-[30%] text-neutral-100">
            A fair and impartial advertising platform
          </p>
        </div>
      </div>
    </Container>
  );
};

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import { CreativeList } from '@/features/Advertiser/CreativeList';
import { OverviewList } from '@/features/Advertiser/OverviewList';
import { SiteList } from '@/features/Advertiser/SiteList';

export const Advertiser = () => {
  const [address] = useState('0x1234567890123456789012345678901234567890');

  const navigate = useNavigate();
  const handleDisonnect = () => {
    navigate('/welcome');
  };

  return (
    <Container>
      <Header address={address} current="advertiser" onDisconnect={handleDisonnect} />
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

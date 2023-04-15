import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import { CreativeList } from '@/features/Advertiser/CreativeList';
import { OverviewList } from '@/features/Advertiser/OverviewList';
import { SiteList } from '@/features/Advertiser/SiteList';

export const Advertiser = () => (
  <Container>
    <Header />
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

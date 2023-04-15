import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import { CreativeList } from '@/features/Publisher/CreativeList';
import { OverviewList } from '@/features/Publisher/OverviewList';
import { SiteList } from '@/features/Publisher/SiteList';

export const Publisher = () => (
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

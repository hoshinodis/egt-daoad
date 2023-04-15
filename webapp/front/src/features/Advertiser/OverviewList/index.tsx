import { useMemo, useState } from 'react';

import { Title } from '@/components/Elements/Title';
import { OverviewCard } from '@/components/OverviewCard';

import AdsIcon from '@/assets/icons/ads.svg';
import SpeedIcon from '@/assets/icons/speed.svg';
import StakeIcon from '@/assets/icons/stake.svg';
import VpIcon from '@/assets/icons/vp.svg';
import AdvertiserOverviewTitle from '@/assets/title/advertiser-overview.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

/**
 * @package
 */
export const OverviewList = () => {
  const maxVp = useSelector((state: RootState) => state.app.ADsGTVP);

  const adsGt = useSelector((state: RootState) => state.app.rewardADsAmount)
  const formattedAdsGt = useMemo(() => adsGt.toLocaleString(), [adsGt]);

  const staked = useSelector((state: RootState) => state.app.stakingADsTokenBalance);
  const formattedStaked = useMemo(() => staked.toLocaleString(), [staked]);

  const handleStake = (amount: number) => {
    alert(`stake: ${amount}`);
  }
  const vp = useSelector((state: RootState) => state.app.ADsGTVP);

  const regionSpeed = useSelector((state: RootState) => state.app.AdsGTVPTime);

  return (
    <>
      <Title className="my-8" src={AdvertiserOverviewTitle} alt="advertiser overview" />
      <div className="flex gap-12">
        <OverviewCard className="h-48 flex-1" title="ADsGT" icon={AdsIcon}>
          <p className="text-48-bold text-neutral-10">{formattedAdsGt}</p>
        </OverviewCard>
        <OverviewCard
          className="h-48 flex-1"
          type="advertiser"
          title="Staked ADsGT"
          icon={StakeIcon}
          onStake={handleStake}
          maxVp={maxVp}
        >
          <p className="text-48-bold text-neutral-10">{formattedStaked}</p>
        </OverviewCard>
        <OverviewCard className="h-48 flex-1" title="Voting Power (AD)" icon={VpIcon}>
          <div>
            <p className="text-48-bold text-neutral-10 inline">{`${vp}`}</p>
            <p className="text-28-semi text-neutral-40 inline"> / 100 VP</p>
          </div>
        </OverviewCard>
        <OverviewCard className="h-48 flex-1" title="VP Regen Speed" icon={SpeedIcon}>
          <div>
            <p className="text-48-bold text-neutral-10 inline">{`${regionSpeed}`}</p>
            <p className="text-28-semi text-neutral-40 inline"> VP / day</p>
          </div>
        </OverviewCard>
      </div>
    </>
  );
};

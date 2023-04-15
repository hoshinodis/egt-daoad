import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import { CreativeList } from '@/features/Advertiser/CreativeList';
import { OverviewList } from '@/features/Advertiser/OverviewList';
import { SiteList } from '@/features/Advertiser/SiteList';
import { getTokenContract } from '@/utils/contract';
import { ethers } from 'ethers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setContractAdvertiserList, setContractSiteList, setDaoContract, setIsAdmin, setIsAdvertiser, setIsCreate, setIsStaking, setIsVote, setRewardADsAmount, setRewardADsSpeed, setRewardMeAmount, setRewardMeSpeed, setRewardTypes, setStakerList, setStakingADsTokenBalance, setStakingADsTokenContract, setStakingMeTokenBalance, setStakingMeTokenContract, setWithdrawFeesList } from '@/slice/appSlice';

const stakingADsTokenContractAddress = "0xCEdc57A73EFC5a9B599340f348D3Ccc44e225018";
const stakingMeTokenContractAddress = "0xE83aea3CcE8d3C479CEebbF0e10DD2F39F10F0d0";
const rewardADsTokenContractAddress = "0x439e963F9149413fBB6a8F9594C5dEDE2f25cD2b";
const rewardMeTokenContractAddress = "0x01385B66cfc7E4B0657812cED9023D5692608956";
const daoContractAddress = "0x13A473946654605C0ecb48c1BB0C6facED43bF75";
const PUBKEY = "0x81d33b63457C311F33241b1e9A40d3DA46237478"

export const Advertiser = () => {
  const address = useSelector((state: RootState) => state.app.address);
  const isStaking = useSelector((state: RootState) => state.app.isStaking);
  const isCreate = useSelector((state: RootState) => state.app.isCreate);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleDisonnect = () => {
    navigate('/welcome');
    dispatch(setIsAdvertiser(true));
    dispatch(setIsAdmin(false));
    dispatch(setIsCreate(false));
    dispatch(setIsStaking(false));
    dispatch(setIsVote(''));
  };

  useEffect(() => {
    const loadWeb3 = async () => {
      if (address) {
        try {
          if (PUBKEY.toLowerCase() == address.toLowerCase()) {
            dispatch(setIsAdmin(true))
          } else {
            dispatch(setIsAdmin(false))
          }

          const _stakingADsTokenContract = getTokenContract(stakingADsTokenContractAddress, "token");
          dispatch(setStakingADsTokenContract(_stakingADsTokenContract));
          const _ADsBalance = await _stakingADsTokenContract.balanceOf(address);
          dispatch(setStakingADsTokenBalance(ethers.utils.formatEther(_ADsBalance)));

          const _stakingMeTokenContract = getTokenContract(stakingMeTokenContractAddress, "token");
          dispatch(setStakingMeTokenContract(_stakingMeTokenContract));
          const _MeBalance = await _stakingMeTokenContract.balanceOf(address);
          dispatch(setStakingMeTokenBalance(ethers.utils.formatEther(_MeBalance)));

          const _daoContract = getTokenContract(daoContractAddress, "dao")
          dispatch(setDaoContract(_daoContract));

          const contentCount = await _daoContract.getContentsLength();
          let _tempAdvertiserList = [];
          let _tempSiteList = [];
          for (let i = 0; i < contentCount; i++) {

            const temp = await _daoContract.contents(i);
            if (temp[2]) {
              _tempAdvertiserList.push(temp);
            } else {
              _tempSiteList.push(temp);
            }
          }
          dispatch(setContractAdvertiserList(_tempAdvertiserList));
          dispatch(setContractSiteList(_tempSiteList));

          const rewardTypesCount = await _daoContract.getRewardsTypesLength();
          let _tempRewardTypes = [];
          for (let i = 0; i < rewardTypesCount; i++) {
            const temp = await _daoContract.rewardsTypes(i);
            _tempRewardTypes.push(temp)
          }
          dispatch(setRewardTypes(_tempRewardTypes));

          const withdrawFeesCount = await _daoContract.getWithdrawFeesLength();
          let _tempWithdrawFees = [];
          for (let i = 0; i < withdrawFeesCount; i++) {
            const temp = await _daoContract.withdawFees(i);
            _tempWithdrawFees.push(temp)
          }
          dispatch(setWithdrawFeesList(_tempWithdrawFees));

          const stakersCount = await _daoContract.getStakerRewardsLength();
          let _tempStakers = [];
          for (let i = 0; i < stakersCount; i++) {
            const temp = await _daoContract.stakerRewards(i);
            _tempStakers.push(temp);
          }
          dispatch(setStakerList(_tempStakers));

          const _rewardADsAmount = await _daoContract.getRewardTokenInfo(rewardADsTokenContractAddress);
          const _rewardMeAmount = await _daoContract.getRewardTokenInfo(rewardMeTokenContractAddress);

          dispatch(setRewardADsAmount(_rewardADsAmount[0]));
          dispatch(setRewardMeAmount(_rewardMeAmount[0]));
          dispatch(setRewardADsSpeed(parseFloat(ethers.utils.formatEther(_rewardADsAmount[1])) * 60));
          dispatch(setRewardMeSpeed(parseFloat(ethers.utils.formatEther(_rewardMeAmount[1])) * 60));
        } catch (e) {
          console.log("Err: ", e);
        }
      }
    };
    const initialApp = async () => {
      if (address || isStaking == false || isCreate == false)
        await loadWeb3();
    };

    initialApp();
  }, [address, isStaking, isCreate]);

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

import { connectSigner, getTokenContract } from "@/utils/contract";
import { ethers } from "ethers";
import { useEffect, useRef, useState } from "react";





export const Top = () => {
  const [isAdvertiser, setIsAdvertiser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [endDate, setEndDate] = useState(0);
  const [advertiserList, setAdvertiserList] = useState([]);
  const [siteList, setSiteList] = useState([]);
  const [stakingADsTokenBalance, setStakingADsTokenBalance] = useState("");
  const [stakingMeTokenBalance, setStakingMeTokenBalance] = useState("");
  const [stakingADsTokenContract, setStakingADsTokenContract] = useState<ethers.Contract | undefined>();
  const [stakingMeTokenContract, setStakingMeTokenContract] = useState<ethers.Contract | undefined>();
  const [daoContract, setDaoContract] = useState<ethers.Contract | undefined>();
  const [isStaking, setIsStaking] = useState(false);
  const [rewardTypes, setRewardTypes] = useState([]);
  const [ADsGTVP, setADsGTVP] = useState('');
  const [AdsGTVPTime, setAdsGTVPTime] = useState('');
  const [MeGTVP, setMeGTVP] = useState('');
  const [MeGTVPTime, setMeGTVPTime] = useState('');
  const [withdrawFee, setWithdrawFee] = useState('');
  const [withdrawFeeTime, setWithdrawFeeTime] = useState('');
  const [withdawFeesList, setWithdrawFeesList] = useState([]);
  const [stakeTime, setStakeTime] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [stakerList, setStakerList] = useState([]);
  const [voteAmount, setVoteAmount] = useState('');
  const [rewardADsAmount, setRewardADsAmount] = useState(0);
  const [rewardMeAmount, setRewardMeAmount] = useState(0);
  const [rewardADsSpeed, setRewardADsSpeed] = useState(0);
  const [rewardMeSpeed, setRewardMeSpeed] = useState(0);
  const [isVote, setIsVote] = useState('');
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const voteRef = useRef(null);
  const [voteType, setVoteType] = useState('y');


  return (
    <div className="mx-0 my-auto max-w-7xl p-8 text-center">
      <button onClick={() => onConnectMetamask()}>test</button>
    </div>
  );
};

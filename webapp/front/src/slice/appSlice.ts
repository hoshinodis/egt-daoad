import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type AppState = {
  address: string;
  isAdmin: boolean;
  isStaking: boolean;
  isCreate: boolean;
  isVote: string;
  isAdvertiser: boolean;
  stakingADsTokenBalance: string;
  stakingMeTokenBalance: string;
  stakingADsTokenContract: any;
  stakingMeTokenContract: any;
  daoContract: any;
  advertiserList: { id: number; img: string; status: number }[];
  contractAdvertiserList: any[];
  siteList: { id: number; url: string; status: number }[];
  contractSiteList: any[];
  rewardTypes: any[];
  withdrawFeesList: any[];
  stakerList: any[];
  rewardADsAmount: number;
  rewardMeAmount: number;
  rewardADsSpeed: number;
  rewardMeSpeed: number;
  endDate: number;
  ADsGTVP: number;
  AdsGTVPTime: number;
  MeGTVP: number;
  MeGTVPTime: number;
};

const initialState: AppState = {
  address: '',
  isAdmin: false,
  isStaking: false,
  isCreate: false,
  isVote: '',
  isAdvertiser: false,
  stakingADsTokenBalance: '',
  stakingMeTokenBalance: '',
  stakingADsTokenContract: undefined,
  stakingMeTokenContract: undefined,
  daoContract: undefined,
  advertiserList: [],
  contractAdvertiserList: [],
  siteList: [],
  contractSiteList: [],
  rewardTypes: [],
  withdrawFeesList: [],
  stakerList: [],
  rewardADsAmount: 0,
  rewardMeAmount: 0,
  rewardADsSpeed: 0,
  rewardMeSpeed: 0,
  endDate: 0,
  ADsGTVP: 0,
  AdsGTVPTime: 0,
  MeGTVP: 0,
  MeGTVPTime: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setIsAdmin: (state, action: PayloadAction<boolean>) => {
      state.isAdmin = action.payload;
    },
    setIsStaking: (state, action: PayloadAction<boolean>) => {
      state.isStaking = action.payload;
    },
    setIsCreate: (state, action: PayloadAction<boolean>) => {
      state.isCreate = action.payload;
    },
    setIsVote: (state, action: PayloadAction<string>) => {
      state.isVote = action.payload;
    },
    setIsAdvertiser: (state, action: PayloadAction<boolean>) => {
      state.isAdvertiser = action.payload;
    },
    setStakingADsTokenBalance: (state, action: PayloadAction<string>) => {
      state.stakingADsTokenBalance = action.payload;
    },
    setStakingMeTokenBalance: (state, action: PayloadAction<string>) => {
      state.stakingMeTokenBalance = action.payload;
    },
    setStakingADsTokenContract: (state, action: PayloadAction<any>) => {
      state.stakingADsTokenContract = action.payload;
    },
    setStakingMeTokenContract: (state, action: PayloadAction<any>) => {
      state.stakingMeTokenContract = action.payload;
    },
    setDaoContract: (state, action: PayloadAction<any>) => {
      state.daoContract = action.payload;
    },
    setAdvertiserList: (state, action: PayloadAction<any[]>) => {
      state.advertiserList = action.payload;
    },
    setContractAdvertiserList: (state, action: PayloadAction<any[]>) => {
      state.contractAdvertiserList = action.payload;
    },
    setSiteList: (state, action: PayloadAction<any[]>) => {
      state.siteList = action.payload;
    },
    setContractSiteList: (state, action: PayloadAction<any[]>) => {
      state.contractSiteList = action.payload;
    },
    setRewardTypes: (state, action: PayloadAction<any[]>) => {
      state.rewardTypes = action.payload;
    },
    setWithdrawFeesList: (state, action: PayloadAction<any[]>) => {
      state.withdrawFeesList = action.payload;
    },
    setStakerList: (state, action: PayloadAction<any[]>) => {
      state.stakerList = action.payload;
    },
    setRewardADsAmount: (state, action: PayloadAction<number>) => {
      state.rewardADsAmount = action.payload;
    },
    setRewardMeAmount: (state, action: PayloadAction<number>) => {
      state.rewardMeAmount = action.payload;
    },
    setRewardADsSpeed: (state, action: PayloadAction<number>) => {
      state.rewardADsSpeed = action.payload;
    },
    setRewardMeSpeed: (state, action: PayloadAction<number>) => {
      state.rewardMeSpeed = action.payload;
    },
    setEndDate: (state, action: PayloadAction<number>) => {
      state.endDate = action.payload;
    },
    setADsGTVP: (state, action: PayloadAction<number>) => {
      state.ADsGTVP = action.payload;
    },
    setAdsGTVPTime: (state, action: PayloadAction<number>) => {
      state.AdsGTVPTime = action.payload;
    },
    setMeGTVP: (state, action: PayloadAction<number>) => {
      state.MeGTVP = action.payload;
    },
    setMeGTVPTime: (state, action: PayloadAction<number>) => {
      state.MeGTVPTime = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAddress,
  setIsAdmin,
  setIsStaking,
  setIsCreate,
  setIsVote,
  setIsAdvertiser,
  setDaoContract,
  setStakingADsTokenBalance,
  setStakingMeTokenBalance,
  setStakingADsTokenContract,
  setStakingMeTokenContract,
  setAdvertiserList,
  setContractAdvertiserList,
  setRewardTypes,
  setSiteList,
  setContractSiteList,
  setStakerList,
  setWithdrawFeesList,
  setRewardADsAmount,
  setRewardADsSpeed,
  setRewardMeAmount,
  setRewardMeSpeed,
  setEndDate,
  setADsGTVP,
  setAdsGTVPTime,
  setMeGTVP,
  setMeGTVPTime,
} = appSlice.actions;

export default appSlice.reducer;

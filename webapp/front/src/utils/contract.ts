import { ethers } from 'ethers';
import Token from '../utils/abi/Token.json';
import Staking from '../utils/abi/Staking.json';

export const getTokenContract = (address, type) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(address, type == 'token' ? Token.abi : Staking.abi, signer);
};

export const connectSigner = (contract) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return contract.connect(signer);
};

import { ethers } from 'ethers';

import Staking from '@/utils/abi/Staking.json';
import Token from '@/utils/abi/Token.json';

export const getTokenContract = (address: string, type: string): ethers.Contract => {
  if (!window.ethereum) throw new Error('No ethereum provider found');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(address, type === 'token' ? Token.abi : Staking.abi, signer);
};

export const connectSigner = (contract: ethers.Contract): ethers.Contract => {
  if (!window.ethereum) throw new Error('No ethereum provider found');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return contract.connect(signer);
};

export const getGasPrice = async () => {
  if (!window.ethereum) throw new Error('No ethereum provider found');
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const gasPrice = await provider.getGasPrice();
  return gasPrice;
};

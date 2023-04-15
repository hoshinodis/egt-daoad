import { useNavigate } from 'react-router-dom';

import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';

import { Container } from '@/components/Layouts/Container';
import { Header } from '@/components/Layouts/Header';

import TitleIcon from '@/assets/icons/title.svg';
import { setAddress, setIsAdmin } from '@/slice/appSlice';

const { ethereum } = window;

const PUBKEY = '0x81d33b63457C311F33241b1e9A40d3DA46237478';

export const Welcome = () => {
  const dispatch = useDispatch();

  const onConnectMetamask = async () => {
    if (ethereum) {
      try {
        // @ts-ignore
        if (ethereum.networkVersion !== 1442) {
          try {
            await ethereum.request!({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: ethers.utils.hexValue(1442) }],
            });
          } catch (e: unknown) {
            if (e !== null && typeof e === 'object' && 'code' in e && e.code === 4902) {
              await ethereum.request!({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainName: 'polygon_zkevm',
                    chainId: ethers.utils.hexValue(1442),
                    rpcUrls: ['https://rpc.public.zkevm-test.net'],
                  },
                ],
              });
            }
          }
        }

        const accounts = (await ethereum.request!({
          method: 'eth_requestAccounts',
        })) as string[];

        if (accounts[0]) {
          dispatch(setAddress(accounts[0]));
        }

        if (PUBKEY.toLowerCase() === accounts[0].toLowerCase()) {
          dispatch(setIsAdmin(true));
        } else {
          dispatch(setIsAdmin(false));
        }
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      window.open('https://metamask.io');
      alert('Meta Mask not detected');
    }
  };

  const navigate = useNavigate();
  const handleConnect = () => {
    navigate('/advertiser');
    onConnectMetamask().catch((e) => console.log(e));
  };

  // @ts-ignore
  ethereum.on('accountsChanged', () => {
    onConnectMetamask().catch((e) => console.log(e));
  });

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

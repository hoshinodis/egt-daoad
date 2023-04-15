import React from 'react';

import clsx from 'clsx';

import { Button, Icon } from '@/components/Elements';
import { HeaderLink } from '@/components/Layouts/Header/HeaderLink';

import LogoIcon from '@/assets/icons/logo.svg';

export type HeaderPropsType = {
  className?: string;
  address?: string;
  current?: 'advertiser' | 'publisher';
  onConnect?: React.MouseEventHandler<HTMLButtonElement>;
  onDisconnect?: React.MouseEventHandler<HTMLButtonElement>;
};
export const Header = ({
  className,
  address,
  current,
  onConnect,
  onDisconnect,
}: HeaderPropsType) => (
  <div className={clsx('flex justify-between', className)}>
    <Icon src={LogoIcon} alt="logo" size="sm" />
    {address && (
      <div className="flex gap-10">
        <div className="grid place-items-center">
          <HeaderLink current={current === 'advertiser'} href="/advertiser">
            ADVERTISER
          </HeaderLink>
        </div>
        <div className="grid place-items-center">
          <HeaderLink current={current === 'publisher'} href="/publisher">
            PUBLISHER
          </HeaderLink>
        </div>
      </div>
    )}
    <div className="flex items-center justify-end gap-4">
      {address && (
        <p className="text-18-semi text-neutral-100">{`${address.slice(0, 6)} .... ${address.slice(
          -4
        )}`}</p>
      )}
      {address && onDisconnect ? (
        <Button color="neutral" onClick={onDisconnect}>
          DISCONNECT
        </Button>
      ) : (
        onConnect && (
          <Button color="secondary" onClick={onConnect}>
            CONNECT WALLET
          </Button>
        )
      )}
    </div>
  </div>
);

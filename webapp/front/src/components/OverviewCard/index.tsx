import clsx from 'clsx';

import { Button, Card, Icon } from '@/components/Elements';

export type OverviewCardPropsType = {
  className?: string;
  children: React.ReactNode;
  buttonLabel?: string;
  onClick?: () => void;
  title: string;
  icon: string;
};
export const OverviewCard = ({
  className,
  children,
  buttonLabel,
  onClick,
  title,
  icon,
}: OverviewCardPropsType) => (
  <Card className={clsx('relative flex flex-col justify-around px-6', className)}>
    {buttonLabel && onClick && (
      <Button className="absolute top-5 right-0" color="secondary" onClick={onClick}>
        {buttonLabel}
      </Button>
    )}
    <Icon className="absolute bottom-0 right-3 p-0" size="sm" src={icon} alt={title} />
    <p className="text-neutral-10/70 text-18-semi">{title}</p>
    {children}
  </Card>
);

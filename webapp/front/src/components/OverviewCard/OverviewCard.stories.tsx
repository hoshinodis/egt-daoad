import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { OverviewCard } from '@/components/OverviewCard';

import AdsIcon from '@/assets/icons/ads.svg';
import GtIcon from '@/assets/icons/gt.svg';
import SpeedIcon from '@/assets/icons/speed.svg';
import StakeIcon from '@/assets/icons/stake.svg';
import vpIcon from '@/assets/icons/vp.svg';

type T = typeof OverviewCard;

/**
 * @private
 */
export default {
  title: 'components/OverviewCard',
  component: OverviewCard,
  args: {
    title: 'title',
    children: 'OverviewCard',
    className: /* tw */ 'w-80 h-48',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <OverviewCard {...args} />;

/**
 * @private
 */
export const Ads = Template.bind({});
Ads.args = {
  icon: AdsIcon,
};

/**
 * @private
 */
export const Gt = Template.bind({});
Gt.args = {
  icon: GtIcon,
};

/**
 * @private
 */
export const Speed = Template.bind({});
Speed.args = {
  icon: SpeedIcon,
};

/**
 * @private
 */
export const Stake = Template.bind({});
Stake.args = {
  icon: StakeIcon,
  buttonLabel: 'Stake',
  onClick: () => {},
};

/**
 * @private
 */
export const Vp = Template.bind({});
Vp.args = {
  icon: vpIcon,
};

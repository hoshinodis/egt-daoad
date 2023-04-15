import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { StakeModal } from '@/components/OverviewCard/StakeModal';

type T = typeof StakeModal;

/**
 * @private
 */
export default {
  title: 'components/OverviewCard/StakeModal',
  component: StakeModal,
  args: {
    isOpen: true,
    children: 'STAKE',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <StakeModal {...args} />;

/**
 * @private
 */
export const AdsGt = Template.bind({});
AdsGt.args = {
  type: 'adsgt',
};

/**
 * @private
 */
export const MeGt = Template.bind({});
MeGt.args = {
  type: 'megt',
};

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { CreativeModal } from '@/features/Advertiser/CreativeList/CreativeModal';

type T = typeof CreativeModal;

/**
 * @private
 */
export default {
  title: 'features/Advertiser/CreativeList/CreativeModal',
  component: CreativeModal,
  args: {
    children: 'NEW CREATIVE',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <CreativeModal {...args} />;

/**
 * @private
 */
export const Close = Template.bind({});
Close.args = {
  isOpen: false,
};

/**
 * @private
 */
export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

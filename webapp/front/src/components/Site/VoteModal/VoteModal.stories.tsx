import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { VoteModal } from '@/components/Site/VoteModal';

type T = typeof VoteModal;

/**
 * @private
 */
export default {
  title: 'components/Site/VoteModal',
  component: VoteModal,
  args: {
    children: 'VOTE',
    url: 'https://example.com',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <VoteModal {...args} />;

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
  maxVp: 100,
};

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { VoteModal } from '@/components/VoteModal';

type T = typeof VoteModal;

/**
 * @private
 */
export default {
  title: 'components/VoteModal',
  component: VoteModal,
  args: {
    children: 'VOTE',
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
export const Site = Template.bind({});
Site.args = {
  type: 'site',
  url: 'https://example.com',
  isOpen: true,
  maxVp: 80,
};

/**
 * @private
 */
export const Creative = Template.bind({});
Creative.args = {
  type: 'creative',
  url: 'https://picsum.photos/500/200',
  isOpen: true,
  maxVp: 80,
};

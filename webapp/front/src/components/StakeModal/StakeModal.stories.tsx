import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { StakeModal } from '@/components/StakeModal';

type T = typeof StakeModal;

/**
 * @private
 */
export default {
  title: 'components/StakeModal',
  component: StakeModal,
  args: {
    isOpen: true,
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <StakeModal {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

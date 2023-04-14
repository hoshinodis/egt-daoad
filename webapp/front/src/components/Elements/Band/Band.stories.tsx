import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Band } from '@/components/Elements/Band';

type T = typeof Band;

/**
 * @private
 */
export default {
  title: 'components/Elements/Band',
  component: Band,
  args: {
    children: 'Band',
    color: 'process',
    direction: 'horizontal',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Band {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

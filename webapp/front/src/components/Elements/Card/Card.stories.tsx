import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Card } from '@/components/Elements/Card';

type T = typeof Card;

/**
 * @private
 */
export default {
  title: 'components/Elements/Card',
  component: Card,
  args: {
    children: 'Card',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Card {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

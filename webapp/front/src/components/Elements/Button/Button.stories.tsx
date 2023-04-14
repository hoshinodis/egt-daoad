import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from '@/components/Elements/Button';

type T = typeof Button;

/**
 * @private
 */
export default {
  title: 'components/Elements/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Button {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

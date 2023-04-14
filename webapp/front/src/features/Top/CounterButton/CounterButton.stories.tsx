import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { CounterButton } from '@/features/Top/CounterButton';

type T = typeof CounterButton;

/**
 * @private
 */
export default {
  title: 'features/Top/CounterButton',
  component: CounterButton,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <CounterButton />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

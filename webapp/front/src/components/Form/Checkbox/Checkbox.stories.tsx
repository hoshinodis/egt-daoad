import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Checkbox } from '@/components/Form/Checkbox';

type T = typeof Checkbox;

/**
 * @private
 */
export default {
  title: 'components/Form/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    checked: false,
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Checkbox {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

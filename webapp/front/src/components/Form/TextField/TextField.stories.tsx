import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { TextField } from '@/components/Form/TextField';

type T = typeof TextField;

/**
 * @private
 */
export default {
  title: 'components/Form/TextField',
  component: TextField,
  args: {
    label: 'TextField',
    placeholder: 'Placeholder',
    value: '',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <TextField {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

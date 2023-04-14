import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { NumberField } from '@/components/Form/NumberField';

type T = typeof NumberField;

/**
 * @private
 */
export default {
  title: 'components/Form/NumberField',
  component: NumberField,
  args: {
    label: 'NumberField',
    placeholder: 'Placeholder',
    value: '',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <NumberField {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

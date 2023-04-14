import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Spinner } from '@/components/Elements/Spinner';

type T = typeof Spinner;

/**
 * @private
 */
export default {
  title: 'components/Elements/Spinner',
  component: Spinner,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Spinner {...args} />;

/**
 * @private
 */
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  variant: 'primary',
};

/**
 * @private
 */
export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  variant: 'primary',
};

/**
 * @private
 */
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  variant: 'primary',
};

/**
 * @private
 */
export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  variant: 'primary',
};

/**
 * @private
 */
export const Light = Template.bind({});
Light.args = {
  size: 'md',
  variant: 'light',
};

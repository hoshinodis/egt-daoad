import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Icon } from '@/components/Elements/Icon';

import reactLogo from '@/assets/react.svg';

type T = typeof Icon;

/**
 * @private
 */
export default {
  title: 'components/Elements/Icon',
  component: Icon,
  args: {
    src: reactLogo,
    alt: 'React Logo',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Icon {...args} />;

/**
 * @private
 */
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

/**
 * @private
 */
export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
};

/**
 * @private
 */
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { IconList } from '@/features/Top/IconList';

type T = typeof IconList;

/**
 * @private
 */
export default {
  title: 'features/Top/IconList',
  component: IconList,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <IconList />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

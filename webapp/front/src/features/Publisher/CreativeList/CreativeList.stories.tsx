import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { CreativeList } from '@/features/Publisher/CreativeList';

type T = typeof CreativeList;

/**
 * @private
 */
export default {
  title: 'features/Publisher/CreativeList',
  component: CreativeList,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <CreativeList />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

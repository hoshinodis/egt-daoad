import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { OverviewList } from '@/features/Advertiser/OverviewList';

type T = typeof OverviewList;

/**
 * @private
 */
export default {
  title: 'features/Advertiser/OverviewList',
  component: OverviewList,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <OverviewList />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

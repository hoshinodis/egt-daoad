import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { SiteList } from '@/features/Advertiser/SiteList';

type T = typeof SiteList;

/**
 * @private
 */
export default {
  title: 'features/Advertiser/SiteList',
  component: SiteList,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <SiteList />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

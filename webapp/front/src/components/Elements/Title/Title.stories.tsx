import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Title } from '@/components/Elements/Title';

import AdvertiserOverviewTitle from '@/assets/title/advertiser-overview.svg';

type T = typeof Title;

/**
 * @private
 */
export default {
  title: 'components/Elements/Title',
  component: Title,
  args: {
    src: AdvertiserOverviewTitle,
    alt: 'advertiser overview',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Title {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

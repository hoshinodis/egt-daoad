import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { NewSiteModal } from '@/features/Publisher/SiteList/NewSiteModal';

type T = typeof NewSiteModal;

/**
 * @private
 */
export default {
  title: 'features/Publisher/SiteList/NewSiteModal',
  component: NewSiteModal,
  args: {
    children: 'NewSiteModal',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <NewSiteModal {...args} />;

/**
 * @private
 */
export const Close = Template.bind({});
Close.args = {
  isOpen: false,
};

/**
 * @private
 */
export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

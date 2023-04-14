import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { ViteIcon } from '@/features/Top/IconList/ViteIcon';

type T = typeof ViteIcon;

/**
 * @private
 */
export default {
  title: 'features/Top/IconList/ViteIcon',
  component: ViteIcon,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <ViteIcon />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

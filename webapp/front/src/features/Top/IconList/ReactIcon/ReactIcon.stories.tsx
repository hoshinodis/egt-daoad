import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { ReactIcon } from '@/features/Top/IconList/ReactIcon';

type T = typeof ReactIcon;

/**
 * @private
 */
export default {
  title: 'features/Top/IconList/ReactIcon',
  component: ReactIcon,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<T> = () => <ReactIcon />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

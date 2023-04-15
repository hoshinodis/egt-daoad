import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Creative } from '@/components/Creative';

type T = typeof Creative;

const date = new Date();
date.setHours(date.getHours() - 3);
date.setMinutes(date.getMinutes() - 15);
date.setSeconds(date.getSeconds() - 25);

/**
 * @private
 */
export default {
  title: 'components/Creative',
  component: Creative,
  args: {
    id: '0005',
    image: 'https://picsum.photos/500/200',
    createdAt: new Date(),
    ok: 40,
    ng: 60,
    expires: date,
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Creative {...args} />;

/**
 * @private
 */
export const Process = Template.bind({});
Process.args = {
  status: 'process',
};

/**
 * @private
 */
export const Passed = Template.bind({});
Passed.args = {
  status: 'passed',
};

/**
 * @private
 */
export const Rejected = Template.bind({});
Rejected.args = {
  status: 'rejected',
};

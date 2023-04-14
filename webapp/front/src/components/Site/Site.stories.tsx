import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Site } from '@/components/Site';

type T = typeof Site;

/**
 * @private
 */
export default {
  title: 'components/Site',
  component: Site,
  args: {
    id: '0005',
    url: 'https://example.com/hogehoge',
    createdAt: new Date(),
    ok: 40,
    ng: 60,
    tag: '<a href="https://example.com/fugafuga">tag</a>',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Site {...args} />;

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

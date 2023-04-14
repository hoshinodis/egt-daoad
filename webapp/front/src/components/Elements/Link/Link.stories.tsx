import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Link } from '@/components/Elements/Link';

type T = typeof Link;

/**
 * @private
 */
export default {
  title: 'components/Elements/Link',
  component: Link,
  args: { children: 'Link' },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Link {...args} />;

/**
 * @private
 */
export const Internal = Template.bind({});
Internal.args = {
  href: '#',
};

/**
 * @private
 */
export const External = Template.bind({});
External.args = {
  href: 'https://reactjs.org',
  newTab: true,
};

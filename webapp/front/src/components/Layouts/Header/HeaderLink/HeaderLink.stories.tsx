import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { HeaderLink } from '@/components/Layouts/Header/HeaderLink';

type T = typeof HeaderLink;

/**
 * @private
 */
export default {
  title: 'components/Layouts/Header/HeaderLink',
  component: HeaderLink,
  args: {
    children: 'HeaderLink',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <HeaderLink {...args} />;

/**
 * @private
 */
export const Active = Template.bind({});
Active.args = {
  current: true,
  children: 'Active',
  href: '#',
};

/**
 * @private
 */
export const Disactive = Template.bind({});
Disactive.args = {
  current: false,
  children: 'Disactive',
  href: '#',
};

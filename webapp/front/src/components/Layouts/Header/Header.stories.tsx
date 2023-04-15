import { MemoryRouter } from 'react-router-dom';

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Header } from '@/components/Layouts/Header';

type T = typeof Header;

/**
 * @private
 */
export default {
  title: 'components/Layouts/Header',
  component: Header,
  args: {
    address: '0x1234567890123456789012345678901234567890',
    current: 'advertiser',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Header {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

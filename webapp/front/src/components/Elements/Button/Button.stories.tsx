import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from '@/components/Elements/Button';

type T = typeof Button;

/**
 * @private
 */
export default {
  title: 'components/Elements/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Button {...args} />;

/**
 * @private
 */
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

/**
 * @private
 */
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

/**
 * @private
 */
export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
};
export const AllStates = () => (
  <div>
    <div className="mb-4">
      <Button onClick={() => {}} color="primary">
        Primary
      </Button>
    </div>
    <div className="mb-4">
      <Button onClick={() => {}} color="secondary">
        Secondary
      </Button>
    </div>
    <div>
      <Button onClick={() => {}} color="neutral">
        Neutral
      </Button>
    </div>
  </div>
);

import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Dropzone } from '@/components/Elements/Dropzone';

type T = typeof Dropzone;

/**
 * @private
 */
export default {
  title: 'components/Elements/Dropzone',
  component: Dropzone,
  args: {
    onDrop: (acceptedFiles) => console.log(acceptedFiles),
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Dropzone {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

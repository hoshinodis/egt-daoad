import { ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button } from '@/components/Elements/Button';
import { Modal } from '@/components/Elements/Modal';
import { ModalActions } from '@/components/Elements/Modal/ModalActions';
import { ModalContents } from '@/components/Elements/Modal/ModalContents';
import { ModalTitle } from '@/components/Elements/Modal/ModalTitle';

type T = typeof Modal;

/**
 * @private
 */
export default {
  title: 'components/Elements/Modal',
  component: Modal,
  args: {
    isOpen: true,
    children: (
      <>
        <ModalTitle>ModalTitle</ModalTitle>
        <ModalContents>
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
          Modal
          <br />
        </ModalContents>
        <ModalActions>
          <Button color="neutral" onClick={() => {}}>
            Button
          </Button>
          <Button color="secondary" onClick={() => {}}>
            Button
          </Button>
        </ModalActions>
      </>
    ),
  },
} as ComponentMeta<T>;

const Template: ComponentStory<T> = (args) => <Modal {...args} />;

/**
 * @private
 */
export const Default = Template.bind({});
Default.args = {};

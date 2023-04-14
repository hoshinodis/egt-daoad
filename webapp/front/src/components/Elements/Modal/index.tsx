import clsx from 'clsx';

import ReactModal from 'react-modal';

export type ModalPropsType = {
  className?: string;
  isOpen: boolean;
  onClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void;
  children: React.ReactNode;
};
export const Modal = ({ className, isOpen, onClose, children }: ModalPropsType) => (
  <ReactModal
    className="bg-primary-main border-primary-40 absolute inset-y-10 top-1/2 left-1/2 w-11/12 max-w-2xl -translate-x-1/2 -translate-y-1/2 border border-solid p-5"
    isOpen={isOpen}
    portalClassName={className}
    // eslint-disable-next-line tailwindcss/no-custom-classname
    bodyOpenClassName={clsx('ReactModal__Body--open', 'overflow-hidden')}
    // eslint-disable-next-line tailwindcss/no-custom-classname
    overlayClassName={clsx('ReactModal__Overlay', 'fixed inset-0 bg-neutral-100/80')}
    onRequestClose={onClose}
  >
    <div className="flex h-full w-full flex-col justify-between">{children}</div>
  </ReactModal>
);

import { memo } from 'react';
import { useModal } from 'hooks/modal';
import Modal from './Modal';

function ModalProvider() {
  const { items, popModal } = useModal();

  const handleClose = () => {
    popModal();
  };

  return items.map((item) => <Modal key={item.key} {...item} onTransitionExited={handleClose} />);
}

export default memo(ModalProvider);

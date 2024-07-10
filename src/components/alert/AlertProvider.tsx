import { memo } from 'react';
import { useAlert } from 'hooks/alert';
import Alert from './Alert';

function AlertProvider() {
  const { items, popAlert } = useAlert();

  const handleClose = () => {
    popAlert();
  };

  return items.map((item) => <Alert key={item.key} {...item} onTransitionExited={handleClose} />);
}

export default memo(AlertProvider);

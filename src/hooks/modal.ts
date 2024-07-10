import { useContext } from 'react';
import ParamifyContext from 'src/paramify-context';
import useParams from './useParams';
import deepCopy from 'utils/deepCopy';
import { Modal } from 'model/modal';

export const usePushModal = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const pushModal = (modal: Modal) => {
    const items = deepCopy(paramify.modal.items);
    const keys = deepCopy(paramify.keys);

    if (items.some((item) => item.key === modal.key))
      throw new Error('An item with provided key already exist.');

    items.push(modal);
    keys.push({ key: modal.key, category: 'modal' });

    setParamify((prev) => ({ ...prev, modal: { items }, keys }));
    setParams('modal', items.length);
  };

  return pushModal;
};

export const usePopModal = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const popModal = () => {
    // removing last available modal element

    const items = deepCopy(paramify.modal.items);
    let keys = deepCopy(paramify.keys);

    const lastItemKey = items[items.length - 1].key;

    keys = keys.filter((keyItem) => keyItem.key !== lastItemKey);
    items.pop();

    setParamify((prev) => ({ ...prev, modal: { items }, keys }));
    setParams('modal', items.length || undefined);
  };

  return popModal;
};

export const usePopAllModals = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const popAllModals = () => {
    // removing all modal elements

    let keys = deepCopy(paramify.keys);
    keys = keys.filter((keyItem) => keyItem.category !== 'modal');

    setParamify((prev) => ({ ...prev, modal: { items: [] }, keys }));
    setParams('modal', undefined);
  };

  return popAllModals;
};

export const useModal = () => {
  const { paramify } = useContext(ParamifyContext);

  return {
    items: paramify.modal.items,
    pushModal: usePushModal(),
    popModal: usePopModal(),
  };
};

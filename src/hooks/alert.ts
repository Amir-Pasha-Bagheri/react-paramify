import { useContext } from 'react';
import ParamifyContext from 'src/paramify-context';
import useParams from './useParams';
import deepCopy from 'utils/deepCopy';
import { Alert } from 'model/alert';

export const usePushAlert = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const pushAlert = (alert: Alert) => {
    const items = deepCopy(paramify.alert.items);
    const keys = deepCopy(paramify.keys);

    if (items.some((item) => item.key === alert.key))
      throw new Error('An item with provided key already exist.');

    items.push(alert);
    keys.push({ key: alert.key, category: 'alert' });

    setParamify((prev) => ({ ...prev, alert: { items }, keys }));
    setParams('alert', items.length);
  };

  return pushAlert;
};

export const usePopAlert = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const popAlert = () => {
    // removing last available alert element

    const items = deepCopy(paramify.alert.items);
    let keys = deepCopy(paramify.keys);

    const lastItemKey = items[items.length - 1].key;

    keys = keys.filter((keyItem) => keyItem.key !== lastItemKey);
    items.pop();

    setParamify((prev) => ({ ...prev, alert: { items }, keys }));
    setParams('alert', items.length || undefined);
  };

  return popAlert;
};

export const usePopAllAlerts = () => {
  const { paramify, setParamify } = useContext(ParamifyContext);
  const [, setParams] = useParams();

  const popAllAlerts = () => {
    // removing all alert elements

    let keys = deepCopy(paramify.keys);
    keys = keys.filter((keyItem) => keyItem.category !== 'alert');

    setParamify((prev) => ({ ...prev, alert: { items: [] }, keys }));
    setParams('alert', undefined);
  };

  return popAllAlerts;
};

export const useAlert = () => {
  const { paramify } = useContext(ParamifyContext);

  return {
    items: paramify.alert.items,
    pushAlert: usePushAlert(),
    popAlert: usePopAlert(),
    popAllAlerts: usePopAllAlerts(),
  };
};

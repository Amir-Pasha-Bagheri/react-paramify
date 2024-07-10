import { Dispatch, SetStateAction } from 'react';
import { Alert } from './alert';
import { Modal } from './modal';

export interface ParamifyContextState<T> {
  paramify: T;
  setParamify: Dispatch<SetStateAction<T>>;
}

export interface InitialParamifyState {
  keys: Key[];
  alert: ParamifyCategory<Alert>;
  modal: ParamifyCategory<Modal>;
}

export interface Key {
  category: 'alert' | 'modal';
  key: string;
}

export interface ParamifyCategory<T> {
  items: T[];
}

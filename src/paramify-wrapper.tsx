import { lazy, ReactNode, useEffect, useState } from 'react';
import ParamifyContext from './paramify-context';
import { InitialParamifyState } from 'model/paramify';
import Condition from 'components/Condition';
import useParams from 'hooks/useParams';
import BackInterceptor from 'components/BackInterceptor';

const ModalProvider = lazy(() => import('components/modal/ModalProvider'));
const AlertProvider = lazy(() => import('components/alert/AlertProvider'));

interface ParamifyWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

const initialState: InitialParamifyState = {
  keys: [],
  alert: {
    items: [],
  },
  modal: {
    items: [],
  },
};

function ParamifyWrapper(props: ParamifyWrapperProps) {
  const [paramify, setParamify] = useState<InitialParamifyState>(initialState);
  const [params] = useParams();

  useEffect(() => {
    if (params.size) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <ParamifyContext.Provider value={{ paramify, setParamify }}>
      <BackInterceptor />

      <Condition condition={paramify.alert.items.length > 0} fallback={props.fallback}>
        <AlertProvider />
      </Condition>

      <Condition condition={paramify.modal.items.length > 0} fallback={props.fallback}>
        <ModalProvider />
      </Condition>

      {props.children}
    </ParamifyContext.Provider>
  );
}

export default ParamifyWrapper;

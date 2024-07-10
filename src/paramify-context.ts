import { createContext } from 'react';
import { InitialParamifyState, ParamifyContextState } from 'model/paramify';

const ParamifyContext = createContext<ParamifyContextState<InitialParamifyState>>(null);

export default ParamifyContext;

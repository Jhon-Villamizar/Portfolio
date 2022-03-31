import { createContext, ReactNode, useReducer } from 'react';
import counterReducer, { Dispatch, State } from './reducer';

export const defaultState:any = { menu: false, theme: false };

export const CounterContext = createContext<
{state: State, dispatch: Dispatch} | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const CounterProvider = ({ children }: {children: ReactNode}) => {
  // eslint-disable-next-line max-len
  const [state, dispatch] = useReducer(counterReducer, defaultState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;

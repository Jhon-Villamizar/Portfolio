import { useContext } from 'react';
import { CounterContext } from './context';

const useCounter = ():any => {
  const context = useContext(CounterContext);
  return context;
};

export default useCounter;

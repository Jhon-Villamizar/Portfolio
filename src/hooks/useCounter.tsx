import { useContext } from 'react';
import { CounterContext } from '../db/context';

const useCounter = ():any => {
  const context = useContext(CounterContext);
  return context;
};

export default useCounter;

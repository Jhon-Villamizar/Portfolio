import { defaultState } from './context';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export type Action = 'menu' | 'theme';
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const counterReducer = (
  state: State,
  action: Action,
) => {
  switch (action) {
    case 'menu':
      return {
        menu: !state.menu,
        theme: state.theme,
      };
    case 'theme':
      return {
        menu: state.menu,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

export default counterReducer;

import { SET_THEME } from '../actions/types'
import { ContextType } from '../ContextType'

type ActionType = {
  type: string
  payload: boolean
}

export const contextReducer = (state: ContextType, action: ActionType) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload }

    default:
      return state
  }
}

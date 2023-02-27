/*eslint-disable @typescript-eslint/no-explicit-any */
import { SET_LENGUAGES, SET_THEME } from '../actions/types'
import { ContextType } from '../ContextType'

type ActionType = {
  type: string
  payload: any
}

export const contextReducer = (state: ContextType, action: ActionType) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload }
    case SET_LENGUAGES:
      return { ...state, lenguage: action.payload }

    default:
      return state
  }
}

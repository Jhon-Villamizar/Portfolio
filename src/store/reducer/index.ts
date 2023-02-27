/*eslint-disable @typescript-eslint/no-explicit-any */
import { SET_LANGUAGES, SET_THEME } from '../actions/types'
import { ContextType } from '../ContextType'

type ActionType = {
  type: string
  payload: any
}

export const contextReducer = (state: ContextType, action: ActionType) => {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload }
    case SET_LANGUAGES:
      console.log('reducer => ', action.payload)

      return { ...state, language: action.payload }

    default:
      return state
  }
}

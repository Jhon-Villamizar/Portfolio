import { SET_THEME } from './types'

export const setTheme = (payload: boolean) => ({
  type: SET_THEME,
  payload: payload,
})

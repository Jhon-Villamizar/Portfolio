import { SET_LANGUAGES, SET_THEME } from './types'

export const setTheme = (payload: boolean) => ({
  type: SET_THEME,
  payload: payload,
})

export const setlanguage = (payload: string) => ({
  type: SET_LANGUAGES,
  payload: payload,
})

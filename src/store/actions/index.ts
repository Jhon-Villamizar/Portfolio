import { SET_LENGUAGES, SET_THEME } from './types'

export const setTheme = (payload: boolean) => ({
  type: SET_THEME,
  payload: payload,
})

export const setLenguage = (payload: string) => ({
  type: SET_LENGUAGES,
  payload: payload,
})

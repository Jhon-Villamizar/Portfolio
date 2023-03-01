/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { SET_LANGUAGES, SET_THEME } from '../../store/actions/types'
import { InicialState } from '../../store/InitialState'
import { contextReducer } from '../../store/reducer'
import i18n from 'i18next'
import '../../i18n/index'
import './HeaderConfig.scss'

const HeaderConfig = () => {
  const { t } = useTranslation(['texts'])
  const [state, dispatch] = useReducer(contextReducer, InicialState)

  useEffect(() => {
    console.log('effect state => ', state, i18n.language)
    i18n.changeLanguage(state.language)
  }, [state])

  const handlerLanguage = (value: string): void => {
    dispatch({ type: SET_LANGUAGES, payload: value })
  }

  return (
    <div className='config-container'>
      <div className='config-bar'>
        <button
          className='App'
          onClick={() =>
            dispatch({
              type: SET_THEME,
              payload: !state.theme,
            })
          }
        >
          App
        </button>
        <select
          defaultValue={i18n.language}
          onChange={({ target }) => handlerLanguage(target.value)}
        >
          <option value='es'>{t('language.es')}</option>
          <option value='en'>{t('language.en')}</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderConfig

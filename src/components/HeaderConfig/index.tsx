/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect, useReducer } from 'react'
import { useTranslation } from 'react-i18next'
import { CgMenuRound } from 'react-icons/cg'
import i18n from 'i18next'
import { AdminConsumer } from '../../store/Context'
import '../../i18n/index'
import './HeaderConfig.scss'

const HeaderConfig = () => {
  const { t } = useTranslation(['texts'])
  const { theme, language, updateLanguage, updateTheme } = AdminConsumer()

  useEffect(() => {
    console.log('effect state => ', language, i18n.language, theme)
    i18n.changeLanguage(language)
  }, [language, theme])

  const handlerLanguage = (value: string): void => {
    updateLanguage(value)
  }

  const handlerMenu = () => {
    console.log('menu')
  }

  return (
    <div className='config-container'>
      <div className='config-bar'>
        <label className='switch'>
          <input
            type='checkbox'
            defaultChecked={theme === 'dark' ? true : false}
            onChange={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <span className='slider round'></span>
        </label>
        <select
          defaultValue={i18n.language}
          onChange={({ target }) => handlerLanguage(target.value)}
        >
          <option value='es'>{t('language.es')}</option>
          <option value='en'>{t('language.en')}</option>
        </select>
        <CgMenuRound className='menu' onClick={handlerMenu} />
      </div>
    </div>
  )
}

export default HeaderConfig

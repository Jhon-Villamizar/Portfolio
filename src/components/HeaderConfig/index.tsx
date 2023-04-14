import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillSunFill, BsHouse } from 'react-icons/bs'
import { RiMoonFill } from 'react-icons/ri'
import { CgMenuRound } from 'react-icons/cg'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import i18n from 'i18next'
import { Link, useLocation } from 'react-router-dom'
import { AdminConsumer } from '../../store/Context'
import spain from '/img/png/spain.png'
import english from '/img/png/unitedKingdom.png'
import '../../i18n/index'
import './HeaderConfig.scss'

const HeaderConfig = () => {
  const [show, setShow] = useState(false)
  const location = useLocation()
  const { t } = useTranslation(['texts'])
  const { theme, language, menu, updateLanguage, updateTheme, updateMenu } = AdminConsumer()

  useEffect(() => {
    i18n.changeLanguage(language)
    setShow(false)
  }, [language, theme])

  const handlerLanguage = (value: string): void => {
    updateLanguage(value)
    setShow(false)
  }

  const handlerMenu = () => {
    updateMenu(!menu)
  }

  return (
    <div className='config-container'>
      <nav className='menu'>
        <ul>
          {location.pathname !== '/' ? (
            <li>
              <Link to={'/'}>
                <BsHouse />
              </Link>
            </li>
          ) : (
            <li></li>
          )}

          <li>
            <Link to={'/about'}>{t('menu.list.about')}</Link>
          </li>
          <li>
            <Link to={'/journey'}>{t('menu.list.journey')}</Link>
          </li>
          <li>
            <Link to={'/skills'}>{t('menu.list.skills')}</Link>
          </li>
          <li>
            <Link to={'/experience'}>{t('menu.list.experience')}</Link>
          </li>
          {/*<li>
            <Link to={'/projects'}>{t('menu.list.projects')}</Link>
          </li> */}
          <li>
            <Link to={'/contact'}>{t('menu.list.contact')}</Link>
          </li>
        </ul>
      </nav>
      <div className='mobil-menu'>
        <CgMenuRound className='icon-menu' onClick={handlerMenu} />
      </div>
      <div className='config-bar'>
        <label className='switch'>
          <div className='sun'>
            <BsFillSunFill />
          </div>
          <input
            type='checkbox'
            defaultChecked={theme === 'dark' ? true : false}
            onChange={() => updateTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <span className='slider round'></span>
          <div className='moon'>
            <RiMoonFill />
          </div>
        </label>
        <div className='select'>
          <div className='selected-option' onClick={() => setShow(!show)}>
            {i18n.language === 'es' ? <img src={spain} alt='' /> : <img src={english} alt='' />}
            {show ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <div className={show ? 'option' : 'option--close'}>
            <div onClick={() => handlerLanguage('es')}>
              <img src={spain} alt='' />
            </div>
            <div onClick={() => handlerLanguage('en')}>
              <img src={english} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderConfig

import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'

import './MobileMenu.scss'

const MobilMenu = () => {
  const { t } = useTranslation(['texts'])

  return (
    <div className='content-mobile-menu'>
      <ul>
        {location.pathname !== '/' ? (
          <li>
            <Link to={'/'}>
              <h5>{t('menu.list.home')}</h5>
            </Link>
          </li>
        ) : (
          <li></li>
        )}

        <li>
          <Link to={'/about'}>
            <h5>{t('menu.list.about')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'/journey'}>
            <h5>{t('menu.list.journey')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'/skills'}>
            <h5>{t('menu.list.skills')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'/experience'}>
            <h5>{t('menu.list.experience')}</h5>
          </Link>
        </li>
        {/*<li>
            <Link to={'/projects'}>{t('menu.list.projects')}</Link>
          </li> */}
        <li>
          <Link to={'/contact'}>
            <h5>{t('menu.list.contact')}</h5>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobilMenu

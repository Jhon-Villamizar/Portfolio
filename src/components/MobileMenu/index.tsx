import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'

import './MobileMenu.scss'

const MobilMenu = () => {
  const { t } = useTranslation(['texts'])

  return (
    <div className='content-mobile-menu'>
      <ul>
        {location.pathname !== '/Portfolio/' ? (
          <li>
            <Link to={'Portfolio/'}>
              <h5>{t('menu.list.home')}</h5>
            </Link>
          </li>
        ) : (
          <li></li>
        )}

        <li>
          <Link to={'Portfolio/about'}>
            <h5>{t('menu.list.about')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/journey'}>
            <h5>{t('menu.list.journey')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/skills'}>
            <h5>{t('menu.list.skills')}</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/experience'}>
            <h5>{t('menu.list.experience')}</h5>
          </Link>
        </li>
        {/*<li>
            <Link to={'Portfolio/projects'}>{t('menu.list.projects')}</Link>
          </li> */}
        <li>
          <Link to={'Portfolio/contact'}>
            <h5>{t('menu.list.contact')}</h5>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobilMenu

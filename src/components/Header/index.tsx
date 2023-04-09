import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BsArrowRightShort } from 'react-icons/bs'
import me from '../../img/png/2.png'
import '../../i18n/index'
import './header.scss'

const Header = () => {
  const navigate = useNavigate()
  const { t } = useTranslation(['texts'])

  return (
    <div className='container-header'>
      <div className='header-info'>
        <div className='title'>
          <h1>
            {t('home.welcome')} <br />
            Jhon Villamizar
          </h1>
          <h4>
            {t('home.subtitle')} <br /> fullstack
          </h4>
        </div>
        <div className='button'>
          <button onClick={() => navigate('/Portfolio/contact')}>
            {t('home.button')} <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className='header-img'>
        <img src={me} alt='me' />
      </div>
    </div>
  )
}

export default Header

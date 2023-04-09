import { useTranslation } from 'react-i18next'
import './InforAbout.scss'
import '../../i18n/index'
import otherMe from '../../img/png/1.png'

const InfoAbout = () => {
  const { t } = useTranslation(['texts'])

  return (
    <div className='about-container'>
      <div className='info'>
        <h3>{t('about.title')}</h3>
        <p>{t('about.description')}</p>
      </div>
      <div className='img'>
        <img src={otherMe} alt='' />
      </div>
    </div>
  )
}

export default InfoAbout

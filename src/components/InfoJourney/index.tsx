import { useTranslation } from 'react-i18next'
import '../../i18n/index'
import './InfoJourney.scss'

const InfoJourney = () => {
  const { t } = useTranslation(['texts'])

  return (
    <div className='journey-content'>
      <div className='title'>
        <h3>
          {t('journey.title1')} {'\u00A0'}
          <br />
          {t('journey.title2')}
        </h3>
      </div>
      <div className='lerning'>
        <h5>{t('journey.learning')}</h5>
        <ul>
          <li>Cesde. BS, Software Development.</li>
        </ul>
      </div>
      <div className='licenses'>
        <h5>{t('journey.certifications')}</h5>
        <ul>
          <li>Platzi. React.js</li>
          <li>Platzi. Advanced React</li>
          <li>Platzi. React.js: Render and Compositing Patterns</li>
          <li>Platzi. State Machines on React.js</li>
          <li>Platzi. React Hooks</li>
          <li>Platzi. Rect.js and Redux</li>
          <li>Platzi. Unit Testing with Jest in React</li>
          <li>TestDome. SQL</li>
        </ul>
      </div>
    </div>
  )
}

export default InfoJourney

import { skills } from '../../store/moks/skills'
import './InfoSkills.scss'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'

const InfoSkills = () => {
  const { t } = useTranslation(['texts'])

  return (
    <div className='skill-content'>
      <div className='title' data-testid='skills-title'>
        <h6>{t('skills.subtitle')}</h6>
        <h3>
          {t('skills.title1')}
          <br />
          {t('skills.title2')}
        </h3>
      </div>
      <div className='info' data-testid='skills-data'>
        {skills.map((item) => (
          <div className='data' key={item.name} data-testid='skill-item'>
            <div className='title-data' data-testid='skill-text'>
              <label title={item.title ? item.title : ''}>{item.name}</label>
              <span>{item.percentage}%</span>
            </div>
            <progress max='100' value={item.percentage}>
              {item.percentage}%
            </progress>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InfoSkills

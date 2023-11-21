/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react'
import { AdminConsumer } from '../../store/Context'
import cross from '/img/svg/crossbridge.svg'
import crossWhite from '/img/svg/crossbridgeWhite.svg'
import dev from '/img/svg/devsavant.svg'
import devWhite from '/img/svg/devsavantWhite.svg'
import glo from '/img/svg/globant.svg'
import gloWhite from '/img/svg/globantWhite.svg'
import iso from '/img/svg/isobar.svg'
import per from '/img/svg/perficient.svg'
import perWhite from '/img/svg/perficientWhite.svg'
import pra from '/img/svg/pratech.svg'
import praWhite from '/img/svg/pratechWhite.svg'
import Card from '../Card'
import './InfoExperience.scss'
import { useTranslation } from 'react-i18next'
import '../../i18n/index'

const InfoExperience = () => {
  const { theme } = AdminConsumer()
  const { t } = useTranslation(['texts'])

  const Experience = [
    {
      company: 'Crossbridge',
      position: 'Software Developer',
      time: `${t('experience.may')} 2023 / ${t('experience.nov')} 2023`,
      img: cross,
      img2: crossWhite,
    },
    {
      company: 'Devsavant',
      position: 'Software Developer',
      time: `${t('experience.abr')} 2022 / ${t('experience.ene')} 2023`,
      img: dev,
      img2: devWhite,
    },
    {
      company: 'Perficient',
      position: 'Software Developer',
      time: `${t('experience.nov')} 2021 / ${t('experience.abr')} 2022`,
      img: per,
      img2: perWhite,
    },
    {
      company: 'Globant',
      position: 'Web UI Developer',
      time: `${t('experience.nov')} 2020 / ${t('experience.oct')} 2021`,
      img: glo,
      img2: gloWhite,
    },
    {
      company: 'NetConsult',
      position: 'Full Stack Developer',
      time: `${t('experience.may')} 2020 / ${t('experience.sep')} 2020`,
      img: '',
    },
    {
      company: 'Chef Company',
      position: 'Frontend Developer',
      time: `${t('experience.jul')} 2019 / ${t('experience.abr')} 2020`,
      img: iso,
    },
    {
      company: 'Pratech',
      position: 'Backend Developer',
      time: `${t('experience.ago')} 2018 / ${t('experience.jul')} 2019`,
      img: pra,
      img2: praWhite,
    },
  ]

  useEffect(() => {}, [theme])

  return (
    <div className='experience-container'>
      <div className='title' data-testid='experience-title'>
        <h3>{t('experience.title')}</h3>
      </div>
      <div className='info' data-testid='experience-data'>
        <ul data-testid='experience-list'>
          {Experience.map((item) => (
            <li key={item.company} data-testid='experience-item'>
              <Card
                company={item.company}
                position={item.position}
                time={item.time}
                img={item.img2 && theme === 'dark' ? item.img2 : item.img}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfoExperience

/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react'
import { AdminConsumer } from '../../store/Context'
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

export const Experience = [
  {
    company: 'Devsavant',
    position: 'Software Developer',
    time: 'Apr 2022 / Nov 2022',
    img: dev,
    img2: devWhite,
  },
  {
    company: 'Perficient',
    position: 'Software Developer',
    time: 'Nov 2021 / Apr 2022',
    img: per,
    img2: perWhite,
  },
  {
    company: 'Globant',
    position: 'Web UI Developer',
    time: 'Nov 2021 / Apr 2022',
    img: glo,
    img2: gloWhite,
  },
  {
    company: 'NetConsult',
    position: 'Full Stack Developer',
    time: 'May 2020 / Sep 2020',
    img: '',
  },
  {
    company: 'Chef Company',
    position: 'Frontend Developer',
    time: 'Jul 2019 / Apr 2020',
    img: iso,
  },
  {
    company: 'Pratech',
    position: 'Backend Developer',
    time: 'Aug 2018 / Jul 2019',
    img: pra,
    img2: praWhite,
  },
]

const InfoExperience = () => {
  const { theme } = AdminConsumer()
  const { t } = useTranslation(['texts'])

  useEffect(() => {}, [theme])

  return (
    <div className='experience-container'>
      <div className='title'>
        <h3>{t('experience.title')}</h3>
      </div>
      <div className='info'>
        <ul>
          {Experience.map((item) => (
            <li key={item.company}>
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

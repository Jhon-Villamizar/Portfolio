/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react'
import { AdminConsumer } from '../../store/Context'
import { Experience } from '../../store/moks/experience'
import Card from '../Card'
import './InfoExperience.scss'

const InfoExperience = () => {
  const { theme } = AdminConsumer()

  useEffect(() => {}, [theme])

  return (
    <div className='experience-container'>
      <div className='title'>
        <h3>Experience</h3>
      </div>
      <div className='info'>
        <ul>
          {Experience.map((item) => (
            <li key={item.company}>
              <Card
                company={item.company}
                position={item.position}
                time={item.time}
                description={item.description}
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

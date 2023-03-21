/*eslint-disable @typescript-eslint/no-empty-function */
import { useEffect } from 'react'
import { AdminConsumer } from '../../store/Context'
import dev from '../../img/svg/devsavant.svg'
import devWhite from '../../img/svg/devsavantWhite.svg'
import glo from '../../img/svg/globant.svg'
import gloWhite from '../../img/svg/globantWhite.svg'
import iso from '../../img/svg/isobar.svg'
import per from '../../img/svg/perficient.svg'
import perWhite from '../../img/svg/perficientWhite.svg'
import pra from '../../img/svg/pratech.svg'
import praWhite from '../../img/svg/pratechWhite.svg'
import Card from '../Card'
import './InfoExperience.scss'

export const Experience = [
  {
    company: 'Devsavant',
    position: 'Software Developer',
    time: 'Apr 2022 / Nov 2022',
    img: dev,
    img2: devWhite,
    description:
      'Build, maintain and update different components and packages for the company Impartner from the United States, with technologies such as Angular, Knockout, Sass, Typescript, Agil, Kamban.',
  },
  {
    company: 'Perficient',
    position: 'Software Developer',
    time: 'Nov 2021 / Apr 2022',
    img: per,
    img2: perWhite,
    description:
      'Build web applications with different frontend frameworks such as Angular and React, creating components, tests, storage, styles, and consuming services to get data and get data with graphQL. Build API with NodeJS, Express, non-relational databases, and deployed in AWS as serverless with lambda functions and dynamoDB',
  },
  {
    company: 'Globant',
    position: 'Web UI Developer',
    time: 'Nov 2021 / Apr 2022',
    img: glo,
    img2: gloWhite,
    description:
      'Build web applications with different frontend frameworks such as Angular and React, creating components, tests, storage, styles, and consuming services to get data.',
  },
  {
    company: 'NetConsult',
    position: 'Full Stack Developer',
    time: 'May 2020 / Sep 2020',
    img: '',
    description:
      'Create and build web applications with Angular+2, NodeJs, Firebase. Create and build mobile applications with NodeJs, Firebase, and Ionic.',
  },
  {
    company: 'Chef Company',
    position: 'Frontend Developer',
    time: 'Jul 2019 / Apr 2020',
    img: iso,
    description:
      'Build custom web applications with HTML, CSS, JavaScript, ReactJs, Angular+2, NodeJs, and consume API REST services. ',
  },
  {
    company: 'Pratech',
    position: 'Backend Developer',
    time: 'Aug 2018 / Jul 2019',
    img: pra,
    img2: praWhite,
    description:
      'Build custom applications in the Backend with NodeJs in TypeScript, C# .NET, Java Spring Boot, and MongoDB. Build custom applications in the Frontend Angular+2, ReactJs. Create and consume APIs and CRUDs deployed on IBM Cloud Foundry.',
  },
]

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

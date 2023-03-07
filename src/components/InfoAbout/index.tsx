import './InforAbout.scss'
import otherMe from '../../img/1.png'

const InfoAbout = () => {
  return (
    <div className='about-container'>
      <div className='info'>
        <h3>About Me</h3>
        <p>
          Jhon has worked as a software developer for 5 years in different positions as a backend,
          frontend, and full-stack developer, he had handled different programming languages, C#
          (ASP . NET), and JavaScript mainly, in particular with frameworks and libraries such as
          NodeJS, Express, NestJS, Angular, RXJS, ReactJS, Redux (Redux-Saga), GraphQL, React
          Testing Library; talking of databases (SQL Server, MySQL ) and non-relational (MongoDB,
          firebase), also markup languages and styles like HTML, Pug, CSS, Scss, Sass, Less; and
          agile methodologies like Scrum, and Kanban
        </p>
      </div>
      <div className='img'>
        <img src={otherMe} alt='' />
      </div>
    </div>
  )
}

export default InfoAbout

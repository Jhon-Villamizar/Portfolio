import { skills } from '../../store/moks/skills'
import './InfoSkills.scss'

const InfoSkills = () => {
  return (
    <div className='skill-content'>
      <div className='title'>
        <h6>What i can do</h6>
        <h3>
          Skills &<br />
          Proficiencies
        </h3>
      </div>
      <div className='info'>
        {skills.map((item) => (
          <div className='data' key={item.name}>
            <div className='title-data'>
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

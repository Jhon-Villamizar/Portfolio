import './InfoJourney.scss'

const InfoJourney = () => {
  return (
    <div className='journey-content'>
      <div className='title'>
        <h3>
          My{'\u00A0'}
          <br />
          Journey
        </h3>
      </div>
      <div className='lerning'>
        <h5>Learning</h5>
        <ul>
          <li>Cesde. BS, Software Development.</li>
        </ul>
      </div>
      <div className='licenses'>
        <h5>Licenses and certifications</h5>
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

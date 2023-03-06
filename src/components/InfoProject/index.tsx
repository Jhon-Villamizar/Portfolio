/*eslint-disable react/no-unescaped-entities */
import './InfoProject.scss'

const InfoProjects = () => {
  return (
    <div className='projects-container'>
      <div className='img'></div>
      <div className='info'>
        <h3>Projects</h3>
        <div>
          <h6>Frank, Editor</h6>
          <p>
            "I've worked with Max for years and I really admire his diligence in meeting his //
            eslint-disable-next-line react/no-unescaped-entities deadlines."
          </p>
        </div>
        <div>
          <h6>Lester, Business Owner</h6>
          <p>"Max has a way with words. His web copy doubled our sales in 24 hours!"</p>
        </div>
        <div>
          <h6>Edna, CMO</h6>
          <p>"Max is able to write copy that our audience responds to. We're very impressed."</p>
        </div>
      </div>
    </div>
  )
}

export default InfoProjects

import { BsHouse } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './MobileMenu.scss'

const MobilMenu = () => {
  return (
    <div className='content-mobile-menu'>
      <ul>
        {location.pathname !== '/Portfolio/' ? (
          <li>
            <Link to={'Portfolio/'}>
              <h5>Home</h5>
            </Link>
          </li>
        ) : (
          <li></li>
        )}

        <li>
          <Link to={'Portfolio/about'}>
            <h5>About</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/journey'}>
            <h5>Journey</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/skills'}>
            <h5>Skills</h5>
          </Link>
        </li>
        <li>
          <Link to={'Portfolio/experience'}>
            <h5>Experience</h5>
          </Link>
        </li>
        {/*<li>
            <Link to={'Portfolio/projects'}>Projects</Link>
          </li> */}
        <li>
          <Link to={'Portfolio/contact'}>
            <h5>Contact</h5>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MobilMenu

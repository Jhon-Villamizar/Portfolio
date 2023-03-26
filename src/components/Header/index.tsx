import './header.scss'
import me from '../../img/png/2.png'
import { useNavigate } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='container-header'>
      <div className='header-info'>
        <div className='title'>
          <h1>
            Hello, I am <br />
            Jhon Villamizar
          </h1>
          <h4>
            Software developer <br /> fullstack
          </h4>
        </div>
        <div className='button'>
          <button onClick={() => navigate('/Portfolio/contact')}>
            Get in touch. <BsArrowRightShort />
          </button>
        </div>
      </div>
      <div className='header-img'>
        <img src={me} alt='me' />
      </div>
    </div>
  )
}

export default Header

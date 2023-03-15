import './header.scss'
import me from '../../img/2.png'

const Header = () => {
  return (
    <div className='container-header'>
      <div className='header-info'>
        <div className='title'>
          <h1>
            Hello, i am <br />
            Jhon Villamizar
          </h1>
          <h4>Software developer fullstack</h4>
        </div>
        <div className='button'>
          <button>Get in touch.</button>
        </div>
      </div>
      <div className='header-img'>
        <img src={me} alt='me' />
      </div>
    </div>
  )
}

export default Header

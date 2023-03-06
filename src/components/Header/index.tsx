import './header.scss'
import me from '../../img/2.png'

const Header = () => {
  return (
    <div className='container-header'>
      <div className='header-info'>
        <h1>
          Hello, i am <br />
          Jhon Villamizar
        </h1>
        <h4>Software developer fullstack</h4>
      </div>
      <div className='header-img'>
        <img src={me} alt='' />
      </div>
    </div>
  )
}

export default Header

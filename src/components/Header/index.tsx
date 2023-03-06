import './header.scss'

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
        <img src='assets/2.png' alt='' />
      </div>
    </div>
  )
}

export default Header

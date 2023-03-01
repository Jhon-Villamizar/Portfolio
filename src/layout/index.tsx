import { FC, PropsWithChildren } from 'react'
import Footer from '../components/Footer/Footer'
import HeaderConfig from '../components/HeaderConfig/HeaderConfig'
import './layout.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='container-layout'>
      <HeaderConfig />
      <div className='container'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout

import { FC, PropsWithChildren } from 'react'
import HeaderConfig from '../components/HeaderConfig'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <HeaderConfig />
      {children}
    </div>
  )
}

export default Layout

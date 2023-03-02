/*eslint-disable @typescript-eslint/no-empty-function */
import { FC, PropsWithChildren, useEffect } from 'react'
import HeaderConfig from '../components/HeaderConfig/HeaderConfig'
import { AdminConsumer } from '../store/Context'
import './layout.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { theme } = AdminConsumer()

  return (
    <div className={`container-layout ${theme}`}>
      <HeaderConfig />
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout

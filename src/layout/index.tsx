/*eslint-disable @typescript-eslint/no-empty-function */
import { FC, PropsWithChildren, useEffect } from 'react'
import { AdminConsumer } from '../store/Context'
import './layout.scss'
import { useLocation } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { theme, updateMenu } = AdminConsumer()
  const location = useLocation()

  useEffect(() => {
    updateMenu(false)
  }, [location])

  return (
    <div className={`container-layout ${theme}`}>
      <div className='container'>{children}</div>
    </div>
  )
}

export default Layout

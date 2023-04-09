import { createContext, FC, PropsWithChildren, useContext, useState } from 'react'
import { ContextType } from './ContextType'
import { useData } from './useData'

const AdminContext = createContext<ContextType>({} as ContextType)
export const AdminConsumer = () => useContext(AdminContext)

const AdminProvider: FC<PropsWithChildren> = ({ children }) => {
  const { theme, language, menu, updateTheme, updateLanguage, updateMenu } = useData()
  return (
    <AdminContext.Provider
      value={{ theme, language, menu, updateTheme, updateLanguage, updateMenu }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export default AdminProvider

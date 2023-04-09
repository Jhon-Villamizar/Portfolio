import { useState } from 'react'

export const useData = () => {
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('')
  const [menu, setMenu] = useState(true)
  const updateTheme = (changeTheme: string) => setTheme(changeTheme)
  const updateLanguage = (changeLanguage: string) => setLanguage(changeLanguage)
  const updateMenu = (changeMenu: boolean) => setMenu(changeMenu)

  return {
    theme,
    language,
    menu,
    updateTheme,
    updateLanguage,
    updateMenu,
  }
}

import { useState } from 'react'

export const useData = () => {
  const [theme, setTheme] = useState('dark')
  const [language, setLanguage] = useState('')
  const updateTheme = (changeTheme: string) => setTheme(changeTheme)
  const updateLanguage = (changeLanguage: string) => setLanguage(changeLanguage)

  return {
    theme,
    language,
    updateTheme,
    updateLanguage,
  }
}

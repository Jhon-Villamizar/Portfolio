export type ContextType = {
  theme: string
  language: string
  menu: boolean
  updateTheme: (changeTheme: string) => void
  updateLanguage: (changeLanguage: string) => void
  updateMenu: (changeMenu: boolean) => void
}

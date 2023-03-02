export type ContextType = {
  theme: string
  language: string
  updateTheme: (changeTheme: string) => void
  updateLanguage: (changeLanguage: string) => void
}

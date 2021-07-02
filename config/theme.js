import { useState } from 'react'

// Mantenimiento
export const ThemeCurrently = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const item = localStorage.getItem('theme')
      return item !== null ? JSON.parse(item) : 'dark'
    } catch (error) {
      return 'dark'
    }
  })

  const setThemeCurrently = (value) => {
    try {
      localStorage.setItem('theme', JSON.stringify(value))
      setTheme(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [theme, setThemeCurrently]
}

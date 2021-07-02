import { useState } from 'react'
import { keysLocalStorage } from 'src/config/keyLocalStorage'

const { themeLocalStorage } = keysLocalStorage
export const useTheme = () => {
  let currentTheme
  if (typeof window !== 'undefined')
    currentTheme = document.documentElement.dataset.theme
  const [theme, setTheme] = useState(() => {
    try {
      const item = localStorage.getItem(themeLocalStorage)
      currentTheme === undefined &&
        (document.documentElement.dataset.theme = item)
      return item ? item : 'light'
    } catch {
      return 'light'
    }
  })

  const setChangeTheme = (value) => {
    try {
      localStorage.setItem(themeLocalStorage, value)
      setTheme(value)
      theme === 'dark'
        ? (document.documentElement.dataset.theme = 'light')
        : (document.documentElement.dataset.theme = 'dark')
    } catch {
      console.log('error theme')
    }
  }

  return [theme, setChangeTheme]
}

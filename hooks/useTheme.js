import { useState } from 'react'
import { keysLocalStorage } from '@config/keyLocalStorage'

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

  const setChangeTheme = () => {
    try {
      const currentTheme = theme === 'dark' ? 'light' : 'dark'

      localStorage.setItem(themeLocalStorage, currentTheme)
      setTheme(currentTheme)
      document.documentElement.dataset.theme = currentTheme
    } catch {
      console.log('error theme')
    }
  }

  return [theme, setChangeTheme]
}

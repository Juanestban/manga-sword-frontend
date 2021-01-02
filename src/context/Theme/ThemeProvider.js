import React, { useContext, useState } from "react"

const ThemeContext = React.createContext()

export const ThemeProvider = ({ theme, children }) => {
  const [val, setTheme] = useState(theme)

  return (
    <ThemeContext.Provider value={[val, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

const useTheme = () => useContext(ThemeContext)

export { useTheme, ThemeContext }

import Footer from '@components/Molecules/Footer'
import Navbar from '@components/Molecules/Navbar'
import { globalStyles, stylesPrincipalLayout } from './globalStyles'
import { useTheme } from '@hooks/useTheme'

export const PrimaryContainerLayout = ({ children }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === 'dark'

  const changeTheme = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <div className="page">
      <Navbar />
      <div className="container">
        <button onClick={changeTheme}>change theme</button>
        {children}
      </div>
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{stylesPrincipalLayout}</style>
    </div>
  )
}

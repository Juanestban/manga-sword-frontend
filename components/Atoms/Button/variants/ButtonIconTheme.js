import { useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '@hooks/useTheme'
import { Button } from '../Button'

export const ButtonIconTheme = () => {
  const [theme, setTheme] = useTheme()
  const stateTheme = theme === 'dark'

  const IconState = stateTheme ? FiMoon : FiSun
  console.log(stateTheme ? 'white' : 'black')

  useEffect(() => {}, [theme])

  return (
    <Button onClick={setTheme} style={{ boxShadow: 'none' }}>
      <IconState />
    </Button>
  )
}

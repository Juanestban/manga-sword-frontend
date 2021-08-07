import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { ButtonIconTheme } from '@components/Atoms/Button/variants/ButtonIconTheme'
import Button from '@components/Atoms/Button'
import { jsxNavbar } from './styles'
import SearchInput from '../SearchInput'
import ButtonProfile from '../ButtonProfile'

export const Navbar = () => {
  return (
    <header>
      <div className="content-logo">
        <Link href="/">
          <a className="title">
            <h1>Manga Sword</h1>
          </a>
        </Link>
      </div>
      <div className="search-container">
        <SearchInput />
      </div>
      {/* <div className="burger">
        <Button>
          <FiMenu size={20} />
        </Button>
      </div> */}
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/test">
              <a>Biblioteca</a>
            </Link>
          </li>
          <li>
            <ButtonIconTheme />
          </li>
          <li>
            <ButtonProfile />
          </li>
        </ul>
      </nav>
      <style jsx>{jsxNavbar}</style>
    </header>
  )
}

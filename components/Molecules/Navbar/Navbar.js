import Link from 'next/link'
import { ButtonIconTheme } from '@components/Atoms/Button/variants/ButtonIconTheme'
import { jsxNavbar } from './styles'
import SearchInput from '../SearchInput'

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
        </ul>
      </nav>
      <style jsx>{jsxNavbar}</style>
    </header>
  )
}

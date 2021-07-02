import Link from 'next/link'
import { jsxNavbar } from './styles'

export const Navbar = () => {
  return (
    <header>
      <div className="content-logo">
        <Link href="/">
          <a className="title">
            <h1>Manga Readers</h1>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/test">
            <a>Test</a>
          </Link>
        </li>
      </ul>
      <style jsx>{jsxNavbar}</style>
    </header>
  )
}

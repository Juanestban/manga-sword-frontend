import Link from "next/link"

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
      <style jsx>{`
        header {
          display: flex;
          padding: 10px 10px;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--transparent-primary-color);
        }
         {
          /* .content-logo {} */
        }

        .title {
          display: flex;
          align-items: center;
        }

        h1 {
          font-size: 20px;
        }

        ul {
          display: flex;
        }

        li a {
          padding: 10px;
          margin: 0 5px;
        }

        a:hover,
        h1:hover {
          color: var(--secundary-color);
        }
      `}</style>
    </header>
  )
}

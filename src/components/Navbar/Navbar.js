import Link from "next/link"

export const Navbar = () => {
  return (
    <header>
      <div className="content-logo">
        <h1>Manga Readers</h1>
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
        }
         {
          /* .content-logo {} */
        }

        h1 {
          font-size: 15px;
        }

        ul {
          display: flex;
        }

        a {
          padding: 10px;
          margin: 0 5px;
        }

        a:hover {
          background-color: red;
        }
      `}</style>
    </header>
  )
}

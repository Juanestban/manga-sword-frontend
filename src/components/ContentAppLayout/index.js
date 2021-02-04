import Head from "next/head"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import { globalStyles } from "./globalStyles"
import { useTheme } from "../../hooks/useTheme"

export const PrimaryContainerLayout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/images/favicon.ico"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
          type="text/css"
        />
      </Head>
      <ContentAppLayout>{children}</ContentAppLayout>
    </>
  )
}

export const ContentAppLayout = ({ children }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === "dark"

  const changeTheme = () => setTheme(isDark ? "light" : "dark")

  return (
    <div className={`page`}>
      <Navbar />
      <div className="container">
        <button onClick={changeTheme}>change theme</button>
        {children}
      </div>
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}

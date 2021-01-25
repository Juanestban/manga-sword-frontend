import Head from "next/head"
import { useEffect } from "react"
import { ThemeProvider, useTheme } from "../../context/Theme/ThemeProvider"
import { Footer } from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import { globalStyles } from "./globalStyles"
import darkStyles from "../../styles/dark.module.css"
import lightStyles from "../../styles/light.module.css"

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
      <ThemeProvider theme="dark">
        <ContentAppLayout>{children}</ContentAppLayout>
      </ThemeProvider>
    </>
  )
}

export const ContentAppLayout = ({ children }) => {
  const [theme, setTheme] = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    console.log(theme)
  })

  return (
    <div
      className={`page ${
        theme === "dark" ? darkStyles.theme : lightStyles.theme
      }`}
    >
      <Navbar />
      <div className="container">
        <button onClick={() => setTheme(isDark ? "light" : "dark")}>
          change theme
        </button>
        {children}
      </div>
      <Footer />
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        button {
          padding: 10px;
          border: 1px solid var(--secundary-color);
          background-color: ${isDark ? "#0012" : "#FFF"};
          color: var(--text-color);
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: ${isDark ? "#000" : "#FFF"};
          color: var(--secundary-color);
        }
      `}</style>
    </div>
  )
}

import Head from "next/head"
import { Navbar } from "../Navbar/Navbar"
import { globalStyles } from "./globalStyles"

export const ContentAppLayout = ({ children }) => {
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
      </Head>
      <Navbar />
      <div className="app-content">{children}</div>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

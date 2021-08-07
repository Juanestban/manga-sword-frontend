import Footer from '@components/Molecules/Footer'
import Navbar from '@components/Molecules/Navbar'
import { globalStyles, stylesPrincipalLayout } from './globalStyles'

export const PrimaryContainerLayout = ({ children }) => (
  <div className="page">
    <Navbar />
    <main className="container">{children}</main>
    <Footer />
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>{stylesPrincipalLayout}</style>
  </div>
)

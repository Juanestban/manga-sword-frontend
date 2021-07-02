import { jsxFooter } from './styles'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <p className="text-center">
            Copyright &#169; 2021 All rights reserved. Design By{' '}
            <b>manga-reader.com</b>
          </p>
        </div>
      </footer>
      <style jsx>{jsxFooter}</style>
    </>
  )
}

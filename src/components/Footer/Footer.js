export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <p className="text-center">
            Copyright &#169; 2021 All rights reserved. Design By{" "}
            <b>manga-reader.com</b>
          </p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          margin-top: 20px;
          padding: 20px 0;
          border-top: 1px solid var(--transparent-primary-color);
        }

        .text-center {
          text-align: center;
        }

        .text-title-designer {
          font-weight: bold;
        }
      `}</style>
    </>
  )
}

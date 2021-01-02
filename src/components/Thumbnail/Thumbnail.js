import Link from "next/link"

export const Thumbnail = ({ name = "", image = "" }) => {
  return (
    <>
      <Link href="/test">
        <a style={{ position: "relative", border: "1px solid cyan" }}>
          <div className="image-content"></div>
          <h4 className="text">{name}</h4>
        </a>
      </Link>
      <style jsx>{`
        a {
          overflow: hidden;
        }
        .image-content {
          width: 100%;
          height: 240px;
          background-image: url(${image});
          background-size: contain;
          background-repeat: no-repeat;
        }
        .text {
          display: inline-block;
          width: calc(100% - 10px);
          top: 0;
          text-align: center;
          padding: 5px;
          position: absolute;
          background-color: rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </>
  )
}

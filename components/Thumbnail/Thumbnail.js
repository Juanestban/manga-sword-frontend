import Link from 'next/link'

export const Thumbnail = ({ name = '', image = '' }) => {
  return (
    <>
      <Link href="/test">
        <a>
          <div></div>
          <h4>{name}</h4>
        </a>
      </Link>
    </>
  )
}

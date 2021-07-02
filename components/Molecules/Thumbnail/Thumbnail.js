import Link from 'next/link'
import { jsxThumbnail } from './styles'

export const Thumbnail = ({ name = '', image = '' }) => {
  return (
    <>
      <Link href="/test">
        <a>
          <figure>
            <img src={image} alt={`${name}-thumbnail`} />
          </figure>
          <h4>{name}</h4>
        </a>
      </Link>
      <style jsx>{jsxThumbnail}</style>
    </>
  )
}

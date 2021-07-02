import { Thumbnail } from './Thumbnail'

export const ListThumbnail = () => {
  const Thumbnails = [
    {
      id: 1,
      name: 'Solo Leveling',
      image: 'https://otakuteca.com/images/books/cover/5c2efcd42cd5e.jpg',
    },
    {
      id: 2,
      name: 'Solo Leveling',
      image: 'https://otakuteca.com/images/books/cover/5ef62eaa360f0.jpg',
    },
  ]

  return (
    <>
      <div className="content-thumbnail">
        {Thumbnails.map((thumb) => (
          <Thumbnail key={thumb.id} {...thumb} />
        ))}
      </div>
      <style jsx>{`
        .content-thumbnail {
          display: grid;
          grid-template-columns: repeat(8, 1fr);
          gap: 1em;
        }
      `}</style>
    </>
  )
}

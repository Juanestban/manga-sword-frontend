import Head from 'next/head'
import { PrimaryContainerLayout } from '@components/Layouts/ContentAppLayout'
import { ListThumbnail } from '@components/Molecules/Thumbnail/ListThumbnail'

export default function TestPage() {
  return (
    <PrimaryContainerLayout>
      <Head>
        <title>test</title>
      </Head>
      <h2>Title Test-1</h2>
      <p>change Page</p>
      <button>my button</button>
      <p
        style={{
          color: 'var(--secundary-color)',
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        this website be in mode hot-reloading [Configuration]
      </p>
      <ListThumbnail />
      <p>change Page</p>
      <p
        style={{
          color: 'var(--secundary-color)',
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        this website be in mode hot-reloading [Configuration]
      </p>
      <ListThumbnail />
      <p>change Page</p>
      <p
        style={{
          color: 'var(--secundary-color)',
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        this website be in mode hot-reloading [Configuration]
      </p>
      <ListThumbnail />
    </PrimaryContainerLayout>
  )
}

import { PrimaryContainerLayout } from "../src/components/ContentAppLayout"
import { ListThumbnail } from "../src/components/Thumbnail/ListThumbnail"

export default function HomePage() {
  return (
    <PrimaryContainerLayout>
      <h2>Welcome to Next.js!</h2>
      <p>yo soy el parrafo con el font-family del Open-Sans</p>
      <p>change Page</p>
      <p
        style={{
          color: "var(--secundary-color)",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        this website be in mode hot-reloading [Configuration]
      </p>
      <ListThumbnail />
      <p
        style={{
          color: "var(--secundary-color)",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        this website be in mode hot-reloading [Configuration]
      </p>
      <ListThumbnail />
      <p
        style={{
          color: "var(--secundary-color)",
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

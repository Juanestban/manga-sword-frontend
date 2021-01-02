import { PrimaryContainerLayout } from "../../src/components/ContentAppLayout"
import { ListThumbnail } from "../../src/components/Thumbnail/ListThumbnail"

export default function TestPage() {
  return (
    <PrimaryContainerLayout>
      <h2>Title Test-1</h2>
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
    </PrimaryContainerLayout>
  )
}

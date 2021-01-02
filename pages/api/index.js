export default function ApiPage(req, res) {
  //   const IP = res.socket.remoteAddress
  //   const PORT = res.socket.remotePort

  if (req.method === "GET") console.log("GET-METHOD")
  if (req.method === "POST") console.log("POST-METHOD")

  res.json({ message: "Hello, Word!!" })
}

import express from "express"

const app = express()
const PORT = 3000

app.get("/wellcome", (req, res) => {
  res.send("Wellcome to the Booking System Server!")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

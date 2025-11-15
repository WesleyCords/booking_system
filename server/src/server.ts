import "dotenv/config"

import express from "express"

const app = express()
const PORT = process.env.PORT || 8000

app.get("/wellcome", (req, res) => {
  res.send("Wellcome to the Booking System Server!")
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})

import "dotenv/config"
import express from "express"
import cors from "cors"
import sequelize from "./db/index.js"
import { errorHandle } from "./middlewares/errorHandle.js"
import router from "./routes.js"

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(express.json())

app.use("/api", router)

app.use(errorHandle)

const startServer = async () => {
  try {
    await sequelize.authenticate()
    console.log("Conexão com o banco de dados estabelecida com sucesso.")

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  } catch (err) {
    console.error("Não foi possível conectar ao banco de dados: ", err)
  }
}

startServer()

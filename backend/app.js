import express from "express"
import router from "./routes/index.js"
import morgan from "morgan"
import cors from "cors" // imported cors

const app = express()
const PORT = 3001

// app.use(express.static("frontend/vite-project/src")) // serve static files
app.use(express.json()) // to use express
app.use("/api", router) // /api is our default path
app.use(cors()) // use cors

morgan.token("body", (req) => JSON.stringify(req.body))
app.use(
  morgan(
    ":url :method status :status body :body :res[content-length] - :response-time ms"
  )
)

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}, http://localhost:${PORT}`)
})

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    payload: "This route works!"
  })
})

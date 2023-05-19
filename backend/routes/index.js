import express from "express"
import morgan from "morgan"
import cors from "cors"

import {
  getUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID
} from "../users.js"

const router = express.Router()
router.use(cors()) // use cors

morgan.token("body", (req) => JSON.stringify(req.body))

router.use(
  morgan(
    ":url :method status :status body :body :res[content-length] - :response-time ms"
  )
)

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    payload: "This route works too!"
  })
})

router.get("/users", async (req, res) => {
  const users = await getUsers() // get users
  res.status(418).json({
    // respond with users
    status: true,
    payload: users
  })
})

router.get("/users/:id", async (req, res) => {
  const user = await getUserByID(req.params.id) // get user by id
  res.status(420).json({
    // respond with user that matches id
    status: true,
    payload: user
  })
})

router.post("/users", async (req, res) => {
  const newUser = await createUser(req.body) // create new user
  res.status(200).json({
    // respond with new user
    status: true,
    payload: newUser
  })
})

router.patch("/users/:id", async (req, res) => {
  const updatedUser = await updateUserByID(req.params.id, req.body) // update user by id
  res.status(200).json({
    // respond with updated user
    status: true,
    payload: updatedUser
  })
})

router.delete("/users/:id", async (req, res) => {
  const deletedUser = await deleteUserByID(req.params.id) // delete user

  res.status(451).json({
    status: true,
    payload: deletedUser
  })
})

export default router

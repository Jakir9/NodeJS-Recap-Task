/* eslint-disable space-before-function-paren */
import fs from "node:fs/promises"
import { v4 as uuidv4 } from "uuid"

const fileName = "users.json"

export async function getUsers() {
  const file = await fs.readFile(fileName, "utf-8") // read file
  const users = JSON.parse(file) // parse file
  return users // return parsed file
}

export async function getUserByID(id) {
  const file = await fs.readFile(fileName, "utf-8") // read file
  const users = JSON.parse(file) // parse file
  // find user id match
  const user = users.find((user) => user.id === id)
  // return the user
  return user
}

export async function createUser(newUser) {
  const file = await fs.readFile(fileName, "utf-8") // read file
  const users = JSON.parse(file) // parse file
  // add new user to file
  newUser.id = uuidv4() // gives new user an id
  users.push(newUser)
  // write to file
  await fs.writeFile(fileName, JSON.stringify(users, null, 2))
  // return new user
  return newUser
}

export async function updateUserByID(id, updatedUser) {
  const file = await fs.readFile(fileName, "utf-8") // read file
  const users = JSON.parse(file) // parse file
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = updatedUser // updates recipe
      await fs.writeFile(fileName, JSON.stringify(users, null, 2))
      return updatedUser
    }
  }
}

export async function deleteUserByID(id) {
  const file = await fs.readFile(fileName, "utf-8") // read file
  const users = JSON.parse(file) // parse file
  // find user id match
  for (const user of users) {
    if (user.id === id) {
      // remove user
      users.splice(users.indexOf(user), 1) // only removes that one user

      // write to file
      await fs.writeFile(fileName, JSON.stringify(users, null, 2))

      // return deleted user
      return user
    }
  }
}

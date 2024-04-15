import books from "./api/books.js"
import users from "./api/users.js"

export default function (server, mongoose) {
  users(server, mongoose)
  books(server, mongoose)
}
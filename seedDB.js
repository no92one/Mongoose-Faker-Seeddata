import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';
import User from "./model/Users.js";

console.log("Start seeding databse!")

async function seedDB() {
  try {
    mongoose.connect("mongodb+srv://linus:qwerty123456@cluster0.ng8b2fk.mongodb.net/PVT23-SeedData")
    const usersList = await createUsers(3)
    console.log("UsersList - ", usersList)
  } catch (error) {
    console.log(`Errormessage: ${error}`)
  }
}

async function createUsers(amount) {
  const usersList = []
  for (let i = 0; i < amount; i++) {
    const newUser = new User({
      username: faker.internet.userName(),
      password: faker.internet.password({ length: 15 })
    })
    await newUser.save()
    usersList.push(newUser)
    // console.log(`New user - ${newUser.username} - has been created.`)
  }
  // console.log(`${amount} users has been seeded.`)
  return usersList
}

seedDB()
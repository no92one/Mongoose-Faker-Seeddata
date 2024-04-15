import mongoose from "mongoose";

// Skapar ett schema för "users", vilket definierar strukturen för varje "user"-dokument i databasen.
const usersSchema = new mongoose.Schema({
  username: String,  // Varje "user" kommer att ha ett "username".
  password: String
});

/* 
  Skapar en Mongoose-modell baserat på usersSchema.
  Detta tillåter oss att skapa, läsa, uppdatera, och ta bort (CRUD) dokument i vår "users"-collection.
*/
const User = mongoose.model('users', usersSchema);

export default User
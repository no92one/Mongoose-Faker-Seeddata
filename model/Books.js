import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  pris: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors' }
})

const Book = mongoose.model('books', bookSchema);

export default Book
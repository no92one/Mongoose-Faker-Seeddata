import Book from "../model/Books.js";

export default function books(server, mongoose) {


  server.get("/api/books", async (req, res) => {
    try {
      const books = await Book.find().populate("author");
      // const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: "Ett fel inträffade", error });
    }
  });
}
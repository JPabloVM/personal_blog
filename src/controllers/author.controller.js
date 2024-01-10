import { author } from "../models/author.model.js";

class AuthorController {

  static async listAuthors(req, res) {
    try {
      const authors = await author.find();
      res.status(200).json(authors);
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }

  static async searchAuthorById(req, res) {
    try {
      const identifiedAuthor = await author.findById(req.params.id);
      if (!identifiedAuthor) {
        return res.status(404).json({ message: "Author not identified!" });
      }
      res.status(200).json(identifiedAuthor);
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }

  static async updateAuthor(req, res) {
    const authorId = req.params.id;
    try {
      const updatedAuthor = await author.findByIdAndUpdate(authorId, req.body);
      if (!updatedAuthor) {
        return res.status(404).json({ message: "Author not identified!" });
      }
      res.status(200).json({ message: "Author updated with sucess!", updatedAuthor: updatedAuthor });
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }

  static async createAuthor(req, res) {
    try {
      const createdAuthor = await author.create(req.body);
      res.status(201).json({ message: "Author created with sucess", createdAuthor: createdAuthor });
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const deletedAuthor = await author.findByIdAndDelete(req.params.id);
      if (!deletedAuthor) {
        return res.status(404).json("Author not identified!");
      }
      res.status(200).json({ message: "Author deleted with sucess!" });
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }

}

export default AuthorController;
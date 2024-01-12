import NotIdentified from "../errors/notIdentified.error.js";
import { author } from "../models/author.model.js";

class AuthorController {

  static async listAuthors(req, res, next) {
    try {
      const authors = await author.find();
      res.status(200).json(authors);
    } catch (error) {
      next(error);
    }
  }

  static async searchAuthorById(req, res, next) {
    try {
      const identifiedAuthor = await author.findById(req.params.id);
      if (identifiedAuthor) {
        return res.status(200).json(identifiedAuthor);
      }
      next(new NotIdentified("Author not identified!"));
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    const authorId = req.params.id;
    try {
      const updatedAuthor = await author.findByIdAndUpdate(authorId, req.body);
      if (updatedAuthor) {
        return res.status(200).json({ message: "Author updated with sucess!", updatedAuthor: updatedAuthor });
      }
      next(new NotIdentified("Author not identified!"));
    } catch (error) {
      next(error);
    }
  }

  static async createAuthor(req, res, next) {
    try {
      const createdAuthor = await author.create(req.body);
      res.status(201).json({ message: "Author created with sucess", createdAuthor: createdAuthor });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAuthor(req, res, next) {
    try {
      const deletedAuthor = await author.findByIdAndDelete(req.params.id);
      if (deletedAuthor !== null) {
        return res.status(200).json({ message: "Author deleted with sucess!" });
      }
      next(new NotIdentified("Author not identified!"));
    } catch (error) {
      next(error);
    }
  }

}

export default AuthorController;
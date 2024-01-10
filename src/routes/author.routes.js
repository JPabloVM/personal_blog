import express from "express";
import AuthorController from "../controllers/author.controller.js";
const routes = express.Router();

routes.get("/authors", AuthorController.listAuthors);
routes.get("/author/:id", AuthorController.searchAuthorById);
routes.put("/author/:id", AuthorController.updateAuthor);
routes.post("/author", AuthorController.createAuthor);
routes.delete("/author/:id", AuthorController.deleteAuthor);

export default routes;
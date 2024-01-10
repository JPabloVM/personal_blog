import express from "express";
import PostController from "../controllers/post.controller.js";

const routes = express.Router();

routes.get("/posts", PostController.listPosts);
routes.get("/post/:id", PostController.searchPostById);
routes.put("/post/:id", PostController.udpatePost);
routes.post("/post", PostController.createPost);
routes.delete("/post/:id", PostController.deletePost);

export default routes;
import express from "express";
import posts from "./post.routes.js";
import author from "./author.routes.js";

const routes = (app) => {
  app.get("/", (req, res) => {
    res.send("Hi, this is my personal Blog!");
  });

  app.use(express.json(), posts, author);
};

export default routes;
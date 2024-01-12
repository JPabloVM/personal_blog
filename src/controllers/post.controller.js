import { author } from "../models/author.model.js";
import post from "../models/post.model.js";
import NotIdentified from "../errors/notIdentified.error.js";
class PostController {

  static async listPosts(req, res, next) {
    try {
      const posts = await post.find();
      res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  }

  static async searchPostById(req, res, next) {
    try {
      const identifiedPost = await post.findById(req.params.id);
      if (identifiedPost) {
        return res.status(200).json(identifiedPost);
      }
      next(new NotIdentified("Post not Identified!"));
    } catch (error) {
      next(error);
    }
  }

  static async udpatePost(req, res, next) {
    const postId = req.params.id;
    try {
      const updatedPost = await post.findByIdAndUpdate(postId, req.body);
      if (updatedPost) {
        return res.status(404).json({ message: "Post updated with sucess!", updatedPost: updatedPost });
      }
      next(new NotIdentified("Post not Identified!"));
    } catch (error) {
      next(error);
    }
  }

  static async createPost(req, res, next) {
    const newAuthor = req.body;
    try {
      const identifiedAuthor = await author.findById(newAuthor.author);
      const postWithAuthor = { ...newAuthor, author: { ...identifiedAuthor._doc } };
      const createdPost = await post.create(postWithAuthor);
      res.status(200).json({ message: "Post created with sucess!", createdPost: createdPost });
    } catch (error) {
      next(error);
    }
  }

  static async deletePost(req, res, next) {
    try {
      const deletedPost = await post.findByIdAndDelete(req.params.id);
      if (deletedPost !== null) {
        return res.status(200).json("Post Deleted With Sucess!");
      }
      next(new NotIdentified("Post not Identified!"));
    } catch (error) {
      next(error);
    }
  }

}

export default PostController;
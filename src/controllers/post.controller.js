import post from "../models/post.model.js";

class PostController {

  static async listPosts(req, res) {
    try {
      const posts = await post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json("Ocurred on error -", error);
    }
  }

  static async searchPostById(req, res) {
    try {
      const identifiedPost = await post.findById(req.params.id);
      if (!identifiedPost) {
        return res.status(404).json({ message: "Post not identified!" });
      }
      res.status(200).json(identifiedPost);
    } catch (error) {
      res.status(500).json("Ocurred on error -", error);
    }
  }

  static async udpatePost(req, res) {
    try {
      const updatedPost = await post.findByIdAndUpdate(req.params.id);
      if (!updatedPost) {
        return res.status(404).json("Post not identified!");
      }
      res.status(404).json({ message: "Post updated with sucess!", updatedPost: updatedPost });
    } catch (error) {
      res.status(500).json("Ocurred on error -", error);
    }
  }

  static async deletePost(req, res) {
    try {
      const deletedPost = await post.findByIdAndDelete(req.params.id);
      if (!deletedPost) {
        return res.status(404).json("Post not identified!");
      }
      res.status(200).json("Post Deleted With Sucess!");
    } catch (error) {
      res.status(500).json("Ocurred on error -", error);
    }
  }

  static async createPost(req, res) {
    try {
      const createdPost = await post.create(req.body);
      res.status(200).json({ message: "Post created with sucess!", createdPost: createdPost });
    } catch (error) {
      res.status(500).json("Internal server error!");
    }
  }
}

export default PostController;
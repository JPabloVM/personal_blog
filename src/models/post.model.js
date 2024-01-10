import mongoose from "mongoose";
import { authorSchema } from "./author.model.js";

const postSchema = new mongoose.Schema({
  title: { type: String, required: [true, "The title is mandatory!"] },
  content: { type: String, required: [true, "The content is mandatory!"] },
  banner: { type: String },
  author: authorSchema
}, { versionKey: false, timestamps: true });

const post = mongoose.model("post", postSchema);

export default post;
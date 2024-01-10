import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: [true, "The title is mandatory!"] },
  content: { type: String, required: [true, "The content is mandatory!"] },
  banner: { type: String },
  author: { type: String }
  // ,
  // createdAt: { type: Date },
  // updatedAt: { type: Date }
}, { versionKey: false, timestamps: true });

const post = mongoose.model("post", postSchema);

export default post;
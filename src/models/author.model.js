import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, required: [true, "The name of author is mandatory"] },
  birthDate: { type: Date }
}, { versionKey: false, timestamps: true });

const author = mongoose.model("author", authorSchema);

export { author, authorSchema };
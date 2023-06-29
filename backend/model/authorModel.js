import mongoose from "mongoose";

const authorModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    no_of_books: { type: Number, default: 0 },
    image: { type: String },
    email: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorModel);
export default Author;

import mongoose from "mongoose";

const bookModel = mongoose.Schema(
  {
    book_name: { type: String, trim: true },
    book_description: { type: String },
    book_price: { type: Number },
    book_discounts: { type: Number },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ], //here trim basically removes the white spaces
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookModel);
export default Book;

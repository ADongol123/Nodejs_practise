import mongoose from "mongoose";

const bookModel = mongoose.Schema(
  {
    name: { type: String, trim: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discounts: { type: Number },
    image: { type: String, required: true },
    // users: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ], //here trim basically removes the white spaces
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("book", bookModel);

export default Book;

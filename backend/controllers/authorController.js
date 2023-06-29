import asyncHandler from "express-async-handler";
import Author from "../model/authorModel.js";
import cloudinary from "./../utils/cloudary.js";

export const postAuthor = asyncHandler(async (req, res) => {
  const { name, image, no_of_books, email } = req.body;

  if (!name || !no_of_books || !email) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const existingAuthor = await Author.findOne({ email });

    if (existingAuthor) {
      res.status(400).json({
        message: "this email already exists",
      });
    }
    const author = await Author.create({
      name,
      image,
      no_of_books,
      email,
    });

    if (author) {
      if (image) {
        const uploadRes = await cloudinary.uploader.upload(image, {
          upload_preset: "bookShop",
        });

        author.image = uploadRes.url;
        author.no_of_books = uploadRes.no_of_books;
        await author.save();
      }

      return res.status(200).json({
        _id: author._id,
        name: author.name,
        image: author.image,
        no_of_books: author.no_of_books,
        email: author.email,
      });
    } else {
      throw new Error("Author not created");
    }
  } catch (error) {
    return res.status(400).json({ message: "Error during posting author" });
  }
});
export const getAuthor = asyncHandler(async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).send(authors);
  } catch (error) {
    res.status(400).json({
      messsage: "failed to fetch author",
    });
  }
});

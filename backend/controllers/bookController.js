import express from "express";
import asyncHandler from "express-async-handler";
import Book from "../model/bookModel.js";
import cloudinary from "../utils/cloudary.js";

export const accessProduct = asyncHandler(async (req, res) => {
  const { name, brand, description, price, discounts, image } = req.body;

  if (!name || !brand || !description || !price || !discounts || !image) {
    res.status(400);
    throw new Error("All fields must be filled");
  }

  try {
    const product = await Book.create({
      name,
      brand,
      description,
      price,
      discounts,
      image,
    });

    if (product) {
      if (image) {
        const uploadRes = await cloudinary.uploader.upload(product.image, {
          upload_preset: "bookShop",
        });
        res.status(200).json({
          _id: product._id,
          name: product.name,
          brand: product.price,
          description: product.description,
          price: product.price,
          discounts: product.discounts,
          image: uploadRes.url,
        });
      }
    } else {
      throw new Error("Product not created");
    }
  } catch (error) {
    res.status(401);
    throw new Error(error);
  }
});
export const fetchProduct = asyncHandler(async (req, res) => {
  try {
    const book_details = await Book.find();
    res.status(200).send(book_details);
  } catch (err) {
    res.status(400).send(err);
  }
});

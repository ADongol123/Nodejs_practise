import express from "express";
import asyncHandler from "express-async-handler";
import Book from "../model/bookModel.js";
import cloudinary from "../utils/cloudary.js";
import Sales from "../model/bookSales.js";
import User from "../model/userModel.js";

export const accessProduct = asyncHandler(async (req, res) => {
  const { name, brand, description, price, discounts, image, category } =
    req.body;

  if (!name|| !brand || !desription || !category || !price) {
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
      category,
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
          category: product.category,
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
  const category = req.query.category;
  try {
    if (category) {
      const filtered_category = await Book.find({ category });
      res.status(200).send(filtered_category);
    }
    const book_details = await Book.find();
    res.status(200).send(book_details);
  } catch (err) {
    res.status(400).send(err);
  }
});

export const viewProduct = asyncHandler(async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    book.views += 1;
    await book.save();
    res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: "failed to add the views" });
  }
});

export const soldProduct = asyncHandler(async (req, res) => {
  try {
    const productIds = req.body.productIds; // Assuming the product IDs are passed in the request body as an array
    const userId = req.body.user; // Assuming the logged-in user's ID is available in the req.body.user field
    const products = await Book.find({ _id: { $in: productIds } }); // Fetch the products based on the provided product IDs

    console.log(productIds, userId);
    if (products.length === 0) {
      return res.status(404).json({ error: "No products found" });
    }

    const sales = [];

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      // Increment sales count
      product.sales += 1;
      await product.save();

      // Check if the product already exists in the sales collection
      let existingSale = await Sales.findOne({ productId: product._id });

      if (existingSale) {
        // Check if the user ID already exists in the user array
        if (!existingSale.user.includes(userId)) {
          // Add the user ID to the existing sales entry
          existingSale.user.push(userId);
          await existingSale.save();
        }
        sales.push(existingSale);
      } else {
        // Retrieve the complete user data
        const user = await User.findById(userId).exec(); // Add .exec() to execute the query immediately

        // Create a new Sales entry with complete user data
        const newSale = new Sales({
          productId: product._id, // Set the product ID
          title: product.title, // Set the product title
          sales: product.sales, // Set the sales count
          user: [userId], // Set the user data as an array with the current user ID
        });

        sales.push(newSale);
        await newSale.save();
      }

      console.log(sales);
    }

    // Populate the user field in the sales array
    await Sales.populate(sales, { path: "user" });

    res.status(200).json({ success: true, sales });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to add the sold products" });
  }
});

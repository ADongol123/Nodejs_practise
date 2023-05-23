import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import generateToken from "../config/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;
  
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please Enter all the Fields");
    }
  
    const userExists = await User.findOne({ email });
  
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }
    const user = await User.create({
      name,
      email,
      password,
      pic,
    });
  
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error("Failed to create user");
    }
  });
  
  export const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
  
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email Password");
    }
  });

export const allUsers = asyncHandler(async(req,res) =>{
    const keyword = req.query.search
    ? {
       $or: [
        // regex operation fetches the data based on the query provided by the user
        {name: {$regex: req.query.search, $options:'i'}},//i is case insensitive
        {email: {$regex: req.query.search, $options:'i'}}//i is case insensitive
       ], 
    }: {}

    const users = (await User.find(keyword)).find({_id:{$ne:req.user._id}})
    res.send(users)
})

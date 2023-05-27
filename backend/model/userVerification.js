import mongoose from "mongoose";
// import { asyncHandler } from "express-async-handler";
import bcrypt from "bcryptjs";
const userVerificationModel = mongoose.Schema({
  userId: { type: String },
  uniqueString: { type: String },
  createdAt: { type: Date },
  expiresAt: { type: Date },
});

const UserVerification = mongoose.model(
  "userVerification",
  userVerificationModel
);
export default UserVerification;

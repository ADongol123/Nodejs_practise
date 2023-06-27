import mongoose from "mongoose";
// import { asyncHandler } from "express-async-handler";
import bcrypt from "bcryptjs";
const userModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, default: false },
    pic: {
      type: Object,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    token: { type: String, default: " " },
  },
  {
    timestamp: true,
  }
);

userModel.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10); // The more the salt the more poerfull the hash
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userModel);
export default User;

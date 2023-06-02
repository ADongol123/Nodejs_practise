import express from "express";
import {
  allUsers,
  authUser,
  editProfile,
  registerUser,
  verifyMail,
  forgotPassword,
  resetPassword,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/verify", verifyMail);
router.post("/login", authUser);
router.patch("/profile/:id", editProfile);
router.post("/forgotpassword", forgotPassword);
router.post("/resetPassword", resetPassword);
export default router;

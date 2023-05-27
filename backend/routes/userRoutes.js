import express from "express";
import {
  allUsers,
  authUser,
  registerUser,
  verifyMail,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.get("/verify", verifyMail);
router.post("/login", authUser);
export default router;

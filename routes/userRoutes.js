import express from "express"
import { allUsers, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect,allUsers)

export default router
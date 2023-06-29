import express from "express";
import { postAuthor, getAuthor } from "../controllers/authorController.js";

const router = express.Router();
console.log(router);
router.route("/postAuthor").post(postAuthor);
router.route("/getAuthor").get(getAuthor);

export default router;

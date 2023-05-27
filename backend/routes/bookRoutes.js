import express from "express";
import { accessProduct, fetchProduct } from "../controllers/bookController.js";

const router = express.Router();

router.route("/accessProduct").post(accessProduct);
router.route("/fetchProduct").get(fetchProduct);

export default router;

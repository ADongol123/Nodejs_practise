import express from "express";
import {
  accessProduct,
  fetchProduct,
  viewProduct,
  soldProduct,
} from "../controllers/bookController.js";

const router = express.Router();

router.route("/accessProduct").post(accessProduct);
router.route("/fetchProduct").get(fetchProduct);
router.route("/fetchProduct/:id/view").put(viewProduct);
router.route("/soldProduct").post(soldProduct);
export default router;

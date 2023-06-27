import mongoose from "mongoose";

const salesSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
  title: {
    type: String,
  },
  sales: {
    type: Number,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const Sales = mongoose.model("sales", salesSchema);
export default Sales;

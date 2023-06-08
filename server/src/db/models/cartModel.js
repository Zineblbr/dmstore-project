import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});
CartSchema.index({ userId: 1, productId: 1 }, { unique: true });

export default mongoose.model("Cart", CartSchema);

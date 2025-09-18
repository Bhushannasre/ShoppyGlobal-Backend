import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  thumbnail: String,
  brand: String,
  quantity: Number,
});

const cartModel = mongoose.model("Cart", cartSchema);
export default cartModel;

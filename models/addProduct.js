import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: Array,
  categories: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  price: Number,
  author: String,
  viewCount: {
    type: Number,
    default: 0,
  },
  listedAt: {
    type: Date,
    default: new Date(),
  },
});

const Products = mongoose.model("Products", productSchema);

export default Products;

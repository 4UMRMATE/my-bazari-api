import express from "express";
import {
  getProduct,
  getProducts,
  addProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);

export default router;

import Products from "../models/addProduct.js";

export const getProducts = async (req, res) => {
  let { name } = req.query;
  let products = [];
  try {
    if (name) {
      let nameExp = new RegExp(name, "gi");
      products = await Products.find({ name: { $regex: nameExp } });
    } else {
      products = await Products.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getProduct = async (req, res) => {
  let id = req.params.id;
  try {
    const product = await Products.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new Products(product);

  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

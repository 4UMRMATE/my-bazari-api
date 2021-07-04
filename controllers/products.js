import Products from "../models/addProduct.js";

let total = 0;
const PAGE_SIZE = 6;

export const getProducts = async (req, res) => {
  let { name, limit } = req.query;
  let page = parseInt(req.query.page) > 0 ? parseInt(req.query.page) : 1;
  let products = [];
  try {
    if (name) {
      let nameExp = new RegExp(name, "gi");
      total = await Products.countDocuments({ name: { $regex: nameExp } });
      products = await Products.find({ name: { $regex: nameExp } })
        .limit(parseInt(limit) ? parseInt(limit) : PAGE_SIZE)
        .skip(PAGE_SIZE * (page - 1))
        .select("-__v");
    } else {
      total = await Products.countDocuments({});
      products = await Products.find()
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE * (page - 1))
        .select("-__v");
    }
    res.status(200).json({
      code: 200,
      meta: {
        pagination: {
          total: total,
          pages: Math.ceil(total / PAGE_SIZE),
          page: page,
          limit: parseInt(limit) ? parseInt(limit) : PAGE_SIZE,
        },
      },
      data: products,
    });
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

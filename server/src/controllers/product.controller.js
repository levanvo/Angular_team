const categories = require("../models/category.model");
const products = require("../models/product.model");

const createProduct = async (req, res) => {
  try {
    const body = req.body;
    const product = await products.create(body);
    await categories.findByIdAndUpdate(product.product_CategoryId, {
      $addToSet: {
        category_products: product._id,
      },
    });
    if (!product) {
      return res.status(400).json({ msg: "Add product failed" });
    }
    return res.status(200).json({
      msg: "Add product successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const data = await products.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({ msg: "Update product failed" });
    }
    return res.status(200).json({
      msg: "Update product successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await products.findByIdAndDelete({ _id: req.params.id });
    await categories.findByIdAndUpdate(product.product_CategoryId, {
      $pull: {
        category_products: product._id,
      },
    });

    if (!product) {
      return res.status(400).json({ msg: "Delete product failed" });
    }
    return res.status(200).json({
      msg: "Delete product successfully",
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await products.findById({ _id: req.params.id });
    if (!product) {
      return res.status(400).json({ msg: "Get product failed" });
    }
    return res.status(200).json({
      msg: "Get product successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const { page, limit, sort } = req.query;
    const data = await products
      .find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: sort });
    if (data.length === 0) {
      return res.status(400).json({ msg: "Get product failed" });
    }
    return res.status(200).json({
      msg: "Get product successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProduct,
};

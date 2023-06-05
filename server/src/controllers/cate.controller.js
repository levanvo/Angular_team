const categories = require("../models/category.model");

const createCategory = async (req, res) => {
  try {
    const { category_name } = req.body;
    const data = await categories.create({ category_name });
    if (!data) {
      return res.status(400).json({
        msg: "Create category failed",
      });
    }
    return res.status(201).json({
      msg: "Create category successfully",
      data,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await categories.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!category) {
      return res.status(400).json({
        msg: "Update category failed",
      });
    }
    return res.status(201).json({
      msg: "Update category successfully",
      category,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const data = await categories.find();
    if (data.length === 0) {
      return res.status(400).json({
        msg: "Get all category failed",
      });
    }
    return res.status(201).json({
      msg: "Get all category successfully",
      data,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
module.exports = {
  createCategory,
  updateCategory,
  getAllCategory,
};

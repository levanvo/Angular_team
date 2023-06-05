const { Router } = require("express");
const {
  getAllCategory,
  createCategory,
  updateCategory,
  getCategory,
  deleteCategory,
} = require("../controllers/cate.controller");
const CheckPermission = require("../middleware/checkPermission");
const router = Router();

router.get("/categories", getAllCategory);
router.get("/categories/:id", getCategory);
router.post("/categories", CheckPermission, createCategory);
router.put("/categories/:id", CheckPermission, updateCategory);
router.delete("/categories/:id", CheckPermission, deleteCategory);

module.exports = router;

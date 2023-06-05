const { Router } = require("express");

const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/product.controller");
const CheckPermission = require("../middleware/checkPermission");

const router = Router();

router.get("/products", getAllProduct);
router.post("/products", CheckPermission, createProduct);
router.patch("/products/:id", CheckPermission, updateProduct);
router.delete("/products/:id", CheckPermission, deleteProduct);
router.get("/products/:id", getProduct);

module.exports = router;

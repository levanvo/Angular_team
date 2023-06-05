const { Router } = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");
const router = Router();
router.post("/signup", registerController);
router.post("/signin", loginController);

module.exports = router;

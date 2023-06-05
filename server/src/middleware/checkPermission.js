const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const CheckPermission = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    console.log(user);
    if (!user || user.role !== "admin") {
      throw new Error("Bạn không có quyền truy cập tài nguyên này");
    }
    next();
  } catch (error) {
    return res.status(401).json({
      message: error.message || "Token không hợp lệ",
    });
  }
};

module.exports = CheckPermission;

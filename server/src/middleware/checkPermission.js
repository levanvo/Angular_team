const jwt = require("jsonwebtoken");

const CheckPermission = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  if (decoded.role === "admin") {
    next();
  } else {
    res.status(401).json({
      message: "You dont have permission to access this page",
    });
  }
};

module.exports = CheckPermission;

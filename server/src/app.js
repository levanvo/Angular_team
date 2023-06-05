const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", require("./routes/auth.router"));
app.use("/api", require("./routes/cate.router"));
app.use("/api", require("./routes/product.router"));

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
});
module.exports = app;

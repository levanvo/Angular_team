const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_CategoryId: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
    product_thumb: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
    product_quantity: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    collection: "products",
  }
);

module.exports = model("products", productSchema);

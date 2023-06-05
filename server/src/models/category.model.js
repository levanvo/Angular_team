const { Schema, model } = require("mongoose");

const categorySchema = new Schema(
  {
    category_name: {
      type: String,
      required: true,
    },
    category_products: [
      {
        type: Schema.Types.ObjectId,
        ref: "products",
      },
    ],
    category_desc: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "categories",
  }
);

module.exports = model("categories", categorySchema);

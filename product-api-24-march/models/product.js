var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  inStore: { type: Boolean, required: true },
  upload_date: { type: Date, required: true },
  sizes: { type: Array, required: true },
});

module.exports = mongoose.model("Product", ProductSchema);

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productName: String,
  brandName: String,
  category: String,
  productImage: [],
  description: String,
  price: Number,
  sellingPrice: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true,
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;

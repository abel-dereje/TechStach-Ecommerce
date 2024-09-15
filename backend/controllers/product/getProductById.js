const mongoose = require('mongoose');

const productModel = require("../../models/productModel");

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        message: "Invalid product ID",
        error: true,
        success: false
      });
    }

    const singleProduct = await productModel.findById(productId);

    if (!singleProduct) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
        success: false
      });
    }

    res.json({
      message: "Single Product",
      data: {
        productName: singleProduct.productName,
        brandName: singleProduct.brandName,
        category: singleProduct.category,
        productImage: singleProduct.productImage,
        description: singleProduct.description || '',
        price: singleProduct.price,
        sellingPrice: singleProduct.sellingPrice
      },
      success: true,
      error: false
    });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({
      message: err.message || "Internal Server Error",
      error: true,
      success: false
    });
  }
};

module.exports = getProductById;

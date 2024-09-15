const uploadProductPermission = require('../../helpers/permission');
const productModel = require('../../models/productModel');
const mongoose = require('mongoose');

async function updateProduct(req, res) {
  try {
      console.log("Request Body:", req.body); // Log the request body

      if (!uploadProductPermission(req.userId)) {
          throw new Error("Permission denied");
      }

      const { _id, ...updateFields } = req.body;

      if (!_id) {
          throw new Error("Product ID is missing");
      }

      const updatedProduct = await productModel.findByIdAndUpdate(
          _id,
          updateFields,
          { new: true, runValidators: true }
      );

      if (!updatedProduct) {
          throw new Error("Product not found");
      }

      res.json({
          message: "Product updated successfully",
          data: updatedProduct,
          success: true,
          error: false
      });
  } catch (err) {
      res.status(400).json({
          message: err.message || err,
          error: true,
          success: false
      });
  }
}

module.exports = updateProduct;

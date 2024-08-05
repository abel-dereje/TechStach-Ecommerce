const productModel = require('../../models/productModel');
const uploadProductPermission = require('../../helpers/permission');

const UploadProduct = async (req, res) => {
  try {
    const sessionUserId = req.userId;

    if (!(await uploadProductPermission(sessionUserId))) {
      return res.status(403).json({
        message: 'Permission denied',
        error: true,
        success: false,
      });
    }

    const uploadProduct = new productModel({
      ...req.body,
      user: sessionUserId, // Include user ID in the product data
    });
    const saveProduct = await uploadProduct.save();

    res.status(201).json({
      message: 'Product uploaded successfully',
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    console.error('Error during product upload:', err); // Add this line to log the error
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = UploadProduct;

const addToCartModel = require("../../models/cartProduct");

const addToCartController = async (req, res) => {
  try {
    const { productId } = req?.body;
    const currentUser = req.userId;

    // Check if the product is already in the cart for the current user
    const isProductAvailable = await addToCartModel.findOne({ productId, userId: currentUser });

    console.log("isProductAvailable   ", isProductAvailable);

    if (isProductAvailable) {
      console.log("Product is already in the cart.");
      return res.json({
        message: "Already exists in Add to cart",
        success: false,
        error: true
      });
    }

    // If the product is not already in the cart, add it
    const payload = {
      productId: productId,
      quantity: 1,
      userId: currentUser,
    };

    const newAddToCart = new addToCartModel(payload);
    const saveProduct = await newAddToCart.save();

    return res.json({
      data: saveProduct,
      message: "Product Added to Cart",
      success: true,
      error: false
    });
    
  } catch (err) {
    res.json({
      message: err?.message || err,
      error: true,
      success: false
    });
  }
};

module.exports = addToCartController;

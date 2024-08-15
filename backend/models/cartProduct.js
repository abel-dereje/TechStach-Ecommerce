const mongoose = require('mongoose')

const addToCart = mongoose.Schema({
   productId : {
        ref : 'Product', // Make sure 'Product' matches the name in the `productModel`
        type : mongoose.Schema.Types.ObjectId, // Use ObjectId for references
   },
   quantity : Number,
   userId : {
       type: mongoose.Schema.Types.ObjectId,  // Use ObjectId for referencing the User
       ref: 'User'  // Assuming you have a User model
   },
},{
    timestamps : true
})

const addToCartModel = mongoose.model("AddToCart", addToCart) // Capitalize model names consistently
module.exports = addToCartModel

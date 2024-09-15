const express = require('express')

const router = express.Router()

const userSignUp = require("../controllers/user/user-signup.controller");
const loginUsers = require("../controllers/user/user-signin.controller");
const userDetails = require("../controllers/user/user-details.controller");
const userLogout = require('../controllers/user/user-logout.controller');
const authToken = require('../middleware/authToken');
const allUsers = require('../controllers/user/allUsers');
const updateUser = require('../controllers/user/updateUser');
const UploadProduct = require('../controllers/product/uploadProduct');
const getProduct = require('../controllers/product/getProduct');
const getProductDetails = require('../controllers/product/getProductDetails');
const getCategoryWiseProduct = require('../controllers/product/getCategoryProduct');
const getCategoryProduct = require('../controllers/product/getCategoryProductOne');
const searchProduct = require('../controllers/product/searchProduct');
const filterProduct = require('../controllers/product/filterProduct');
const addToCartController = require('../controllers/user/addToCartController');
const countAddToCartProduct = require('../controllers/user/countAddToCartProduct');
const addToCartViewProduct = require('../controllers/user/addToCartViewProduct');
const updateAddToCartProduct = require('../controllers/user/updateAddToCartProduct');
const deleteAddToCartProduct = require('../controllers/user/deleteAddtoCartProduct');
const updateProduct = require('../controllers/product/updateProduct');
const getProductById = require('../controllers/product/getProductById.js');
const singleUser = require('../controllers/user/singleUser');


router.post('/register', userSignUp);
router.post('/login', loginUsers);
router.get('/user-details', authToken, userDetails);
router.post('/logout', userLogout);

///admin panel 
router.get("/all-user",authToken,allUsers)
router.get("/single-user/:userId",authToken,singleUser)
router.put("/update-user/:userId",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProduct)
router.get("/get-product",getProduct)
router.get("/getProductById/:id",authToken,getProductById)
router.put("/update-product/:id",authToken,updateProduct)
router.get("/get-categoryProduct",getCategoryProduct)
router.post("/category-product",getCategoryWiseProduct)
router.post("/product-details",getProductDetails)
router.get("/search",searchProduct)
router.post("/filter-product",filterProduct)

//user add to cart
router.post("/add-to-cart",authToken,addToCartController)
router.get("/count-add-to-cart-product",authToken,countAddToCartProduct)
router.get("/view-card-product",authToken,addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)




module.exports = router;


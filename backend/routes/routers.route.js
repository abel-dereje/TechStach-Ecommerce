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


router.post('/register', userSignUp);
router.post('/login', loginUsers);
router.get('/user-details', authToken, userDetails);
router.post('/logout', userLogout);

///admin panel 
router.get("/all-user",authToken,allUsers)
router.put("/update-user",authToken,updateUser)

//product
router.post("/upload-product",authToken,UploadProduct)

module.exports = router;


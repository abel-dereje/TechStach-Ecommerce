const express = require('express')

const router = express.Router()

const userSignUp = require("../controllers/user/user-signup.controller");
const loginUsers = require("../controllers/user/user-signin.controller");
const userDetails = require("../controllers/user/user-details.controller");
const userLogout = require('../controllers/user/user-logout.controller');



router.post('/register', userSignUp);
router.post('/login', loginUsers);
router.get('/users', userDetails);
router.post('/logout', userLogout);

// UserRouter.get('/api/user/:id', getUser);
// UserRouter.put('/api/status/:id', userStatus);
// UserRouter.put('/api/updateUser/:id', updateUser);
// UserRouter.delete('/api/deleteUser/:id', deleteUser);

module.exports = router;


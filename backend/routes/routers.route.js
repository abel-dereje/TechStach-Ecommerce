const express = require('express')

const router = express.Router()

const userSignUp = require("../controllers/user/user-signup.controller");
const loginUsers = require("../controllers/user/user-signin.controller");



router.post('/register', userSignUp);
router.post('/login', loginUsers);
// UserRouter.get('/api/users', getUsers);
// UserRouter.get('/api/user/:id', getUser);
// UserRouter.put('/api/status/:id', userStatus);
// UserRouter.put('/api/updateUser/:id', updateUser);
// UserRouter.delete('/api/deleteUser/:id', deleteUser);
// UserRouter.post('/api/logout', logoutUsers);

module.exports = router;


const bcrypt = require('bcryptjs');
const userModel = require('../../models/user.model');
const jwt = require('jsonwebtoken');

const userSignIn = async(req, res) =>{
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error("Please provide email");
    }
    if (!password) {
      throw new Error("Please provide password");
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };

      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });

      res.status(200).json({
        message: "Login successful",
        success: true,
        token: token, // Include token in response
        user: {
          _id: user._id,
          email: user.email,
          name: user.name, // Include other user details as needed
        },
      });
    } else {
      throw new Error("Invalid password");
    }
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignIn;
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 

const authToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    console.log('authHeader:', authHeader); 
    console.log('Extracted token:', token); 

    if (!token) {
      return res.status(401).json({
        message: 'Please Login...!',
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      if (err) {
        console.error('JWT verification error:', err); 
        return res.status(401).json({
          message: 'Unauthorized',
          error: true,
          success: false,
        });
      }

      req.userId = decoded._id;
      next();
    });

  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;

const userModel = require("../../models/user.model");

const singleUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
        error: true,
        success: false
      });
    }

    const singleUser = await userModel.findById(userId);

    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false
      });
    }

    res.json({
      message: "Single User",
      data: {
        firstName: singleUser.firstName,
        lastName: singleUser.lastName,
        email: singleUser.email,
        Phone: singleUser.Phone,
        role: singleUser.role,
        profilePic: singleUser.profilePic || ''
      },
      success: true,
      error: false
    });
  } catch (err) {
    console.error("Server Error:", err); // Log the error for debugging
    res.status(500).json({
      message: err.message || "Internal Server Error",
      error: true,
      success: false
    });
  }
};

module.exports = singleUser;

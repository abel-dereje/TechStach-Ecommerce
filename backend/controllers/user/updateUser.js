const userModel = require("../../models/user.model");

const updateUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        
        const { firstName, lastName, email, phone, profilePic, role } = req.body;

        console.log("Request Body:", req.body);

        const payload = {
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(email && { email }),
            ...(phone && { phone }),
            ...(profilePic && { profilePic }),
            ...(role && { role }),
        };

        console.log("Update Payload:", payload); // Debug: Log the payload to be updated

        // Update the user without checking if they exist first
        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        console.log("Updated User:", updatedUser); // Debug: Log the updated user

        res.json({
            data: updatedUser,
            message: "User Updated",
            success: true,
            error: false
        });
    } catch (err) {
        console.error("Update Error:", err); // Debug: Log the error
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = updateUser;

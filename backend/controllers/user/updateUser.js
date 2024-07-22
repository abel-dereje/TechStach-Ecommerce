const userModel = require("../../models/user.model");

const updateUser = async (req, res) => {
    try {
        const sessionUser = req.userId;

        const { userId, firstName, lastName, email, phone, role } = req.body;

        const payload = {
            ...(firstName && { firstName }),
            ...(lastName && { lastName }),
            ...(email && { email }),
            ...(phone && { phone }),
            ...(role && { role }),
        };

        // Ensure the user exists
        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        // Update the user
        const updatedUser = await userModel.findByIdAndUpdate(userId, payload, { new: true });

        res.json({
            data: updatedUser,
            message: "User Updated",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
};

module.exports = updateUser;

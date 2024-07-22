const userModel = require("../../models/user.model");

const userDetails = async(req,res) => {
    try{
        if (!req.userId) {
            return res.status(400).json({
                error: true,
                success: false,
                message: "User ID is missing"
            });
        }
        console.log("userId",req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetails

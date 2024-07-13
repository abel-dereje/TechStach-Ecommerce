const bcrypt = require("bcryptjs");
const userModel = require("../../models/user.model");
const asyncHandler = require("express-async-handler");

const userSignUp = asyncHandler(async (req, res) => {
  try{
  const { firstName, lastName, email, phone, password } = req.body;

  if ( !firstName || !lastName || !email || !phone || !password) {
    return res.status(400).json({ error: "All fields must be filled" });
  }

  const userByEmail = await userModel.findOne({ email });
  if (userByEmail) {
    return res.status(400).json({ error: "User already exists." });
  }
  if (!email) {
    throw new Error("Please provide email");
  }
  if (!password) {
    throw new Error("Please provide password");
  }
  if (!firstName) {
    throw new Error("Please provide first name");
  }
  if (!lastName) {
    throw new Error("Please provide last name");
  }
  if (!phone) {
    throw new Error("Please provide phone");
  }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "user",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }
})


module.exports = userSignUp;



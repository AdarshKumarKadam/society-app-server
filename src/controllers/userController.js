const { TokenExpiredError } = require("jsonwebtoken");
const User = require("../models/user");
const generateToken = require("../utils/generateToken");
const roles = require("../utils/roles");

//To create new user
const createUser = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const role = roles.USER;

    // Check if email already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      res.status(400);
      throw new Error("Email already exists");
    }

    const newUser = new User({
      username,
      email,
      password,
      phone,
      role,
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        phone: savedUser.phone,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//user login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findByEmail(email);
    if (!user) throw new Error("User not found");

    console.log(user);

    //comparing passwords
    const isMatch = await user.comparePassword(password);

    if (!isMatch) throw new Error("Invalid credentials");

    const token = generateToken({
      _id: user._id,
      role: user.role,
    });

    console.log(token);

    res.status(200).json({ 
      userInfo: {
        _id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone,
        role: user.role ||"user"
      },
      token: token,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//User Dashboard data 
const getAllUsers = async (req, res,  next) => {
  try {
    console.log("get all users called")
    const users = await User.find({role:"user"});

    if(users){
      res.status(200).json({users : users})
    }
    else{
      res.status(404).json({error: "No users found" })
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
      }
}
module.exports = {
  createUser,
  login,
  getAllUsers
};
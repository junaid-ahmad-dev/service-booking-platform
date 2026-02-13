const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asyncHandler = require("../utils/asyncHandler");
const { validationResult } = require("express-validator");

exports.register = asyncHandler( async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email});

  if (existingUser) return res.status(400).json({ msg: "User exists"});

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed });

  res.status(201).json({ msg: "User created", user});
});

exports.login = asyncHandler( async (req, res) => {
  //taking request body
  const { email, password } = req.body;
  //finding user by email
  const user = await User.findOne({ email });

  if (!user) {
    const error = new Error("Invalid credentials");
    error.statusCode = 400;
    throw error;
  }

  //comparing password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const error = new Error("Invalid credentials");
    error.statusCode = 400;
    throw error;
  }
  // jwt signature for authorization
    const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
  // response 
    res.json({
    success: true,
    token,
    user
  });

});

const errors = validationResult(req);
if (!errors.isEmpty()) {
  const error = new Error("Validation failed");
  error.statusCode = 400;
  error.details = errors.array();
  throw error;
}
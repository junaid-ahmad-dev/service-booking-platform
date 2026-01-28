const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email});

  if (existingUser) return res.status(400).json({ msg: "User exists"});

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashed });

  res.status(201).json({ msg: "User created", user});
};

exports.login = async (req, res) => {
  //taking request body
  const { email, password } = req.body;
  //finding user by email
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "Invalid" });
  //comparing password
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Invalid" });
  // jwt signature for authorization
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // response 
  res.json({ token, user });
};

const asyncHandler = require("express-async-handler");
const SignUp = require("../models/SignUpModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.SignUpUser = asyncHandler(async (req, res) => {
  const { password, email } = req.body;
  const found = await SignUp.findOne({ email });
  if (found) {
    return res.status(409).json({
      msg: "Email Already exist",
    });
  }

  const hashPass = await bcrypt.hash(password, 10);
  const result = await SignUp.create({
    ...req.body,
    password: hashPass,
  }); // req.body frontent date catch

  res.json({
    message: "user signup successfully",
  });
});

// update user
exports.SignUpUserUpdate = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const result = await SignUp.findByIdAndUpdate(userId, req.body);
  res.json({ message: "user Updated successfully" });
});

// delete user
exports.SignUpUserDelete = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const result = await SignUp.findByIdAndDelete(userId);
  res.json({ message: "user Delete  successfully" });
});

exports.FetchUser = asyncHandler(async (req, res) => {
  const result = await SignUp.find();
  res.json({
    msg: "User Fetch Success",
    result,
  });
  res.json({
    message: "user fetch successfully",
  });
});

exports.Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const result = await SignUp.findOne({ email });

  if (!result) {
    return res.status(401).json({ msg: "Email is not registered with us" });
  }
  console.log(result);
  const match = await bcrypt.compare(password, result.password);
  if (!match) {
    return res.status(401).json({ msg: "Password Do Not Match" });
  }
  const token = jwt.sign({ name: "user" }, process.env.JWT_KEY);
  res.json({
    msg: "Login Success",
    result: {
      _id: result._id,
      name: result.name,
      email: result.email,
      token,
    },
  });
});

// amol branch

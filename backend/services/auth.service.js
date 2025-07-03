const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const ApiError = require("../utils/ApiError");
const bcrypt = require('bcryptjs');


const create = async (body) => {
  const { username, password } = body;
  const exists = await User.findOne({ username });
  if (!exists) {
    return await User.create({ username, password });
  } else {
    throw new ApiError(403, "UserName already exists.");
  }
};
// asdadadasdsadasdsad
const login = async (body) => {
  const { username, password } = body;
  const user = await User.findOne({ username });

  if (!user) {
    throw new ApiError(403, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch){
    throw new ApiError(403, "Invalid credentials");
  }
  const token = jwt.sign({ sub: user._id, isAdmin: user.isAdmin }, config.jwt.secret);
  return token;
};

module.exports = {
  create,
  login
};

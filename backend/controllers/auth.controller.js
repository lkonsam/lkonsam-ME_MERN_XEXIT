
const authService = require("../services/auth.service");
const catchAsync = require("../utils/catchAsync");

const register = catchAsync(async (req, res) => {
    const { username, password } = req.body;
    await authService.create({ username, password });
    res.status(201).send({
      "message": "User registered successfully"    
    });
});

const login = catchAsync( async (req, res) => {
  const { username, password } = req.body;
    const token = await authService.login({ username, password });
    res.status(200).send({
      token  
    });
  
});

module.exports = {register, login };
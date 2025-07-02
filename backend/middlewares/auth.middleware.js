const jwt = require("jsonwebtoken");
const config = require("../config/config"); 
const ApiError = require("../utils/ApiError"); 


const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ApiError(401, "Authorization token missing");
    }

    const decoded = jwt.verify(token, config.jwt.secret);

    req.user = {
      id: decoded.sub,
      isAdmin: decoded.isAdmin,
    };

    next();
  } catch (err) {
    console.error("Auth error:", err.message || err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const authenticateAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ApiError(401, "Authorization token missing");
    }

    const decoded = jwt.verify(token, config.jwt.secret);

    if (!decoded.isAdmin) {
      throw new ApiError(401, "No Authorization");
    }

    req.user = {
      id: decoded.sub,
      isAdmin: decoded.isAdmin,
    };

    next();
  } catch (err) {
    console.error("Auth error:", err.message || err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {authenticate, authenticateAdmin};

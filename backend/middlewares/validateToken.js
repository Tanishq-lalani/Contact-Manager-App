const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers["authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization header missing" });
  }
    token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token Missing" });
    }
    jwt.verify(token, process.env.PRIVATE_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Token Expired" });
      }
      req.user = decoded.user;
      next();
    });
  
});

module.exports = validateToken;

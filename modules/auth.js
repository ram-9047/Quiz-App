const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "mango", (err, decoded) => {
      if (err) return next(err);
      req.user = {
        userid: decoded.userid,
        email: decoded.email,
        token,
        username: decoded.username,
        isadmin: decoded.isadmin
      };
      next();
    });
  } else {
    res.status(401).json({ success: false, message: "Token not found" });
  }
};

exports.verifyAdmin = (req, res, next) => {
  let isAdmin = req.user.isadmin;
  if (isAdmin) return next();
  res.json({ success: false, message: "Not an Admin!" });
};

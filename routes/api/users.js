const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

//get all users.

router.get("/", (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) return next(err);
    res.json(user);
  });
});

/* User Registeration . */

router.post("/signup", function(req, res, next) {
  console.log(req.body, "inside signup route");
  User.create(req.body, (err, user) => {
    // console.log(err, user);
    if (err) return next(err);
    if (!user)
      return res.status(401).json({ message: "No User Found", success: false });
    if (user) {
      console.log(user, "user found...");
      res.status(200).json({ user, success: true });
    }
  });
});

//User login
router.post("/login", (req, res, next) => {
  console.log(req.body.email);
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    if (!user)
      return res.status(401).json({ message: "Invalid Email", success: false });
    if (!password)
      return res
        .status(401)
        .json({ message: "Invalid Password", success: false });
    jwt.sign(
      {
        // userId: user._id,
        email: user.email
      },
      "mango",
      (err, token) => {
        if (err) return next(err);
        res.json({ message: "user is logged in", success: true, token });
      }
    );
  });
});

module.exports = router;

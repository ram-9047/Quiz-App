const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const Admin = require("../../models/Admin");
const auth = require("../../modules/auth");

//check current logged user

router.use(auth.verifyToken);

router.get("/", (req, res, next) => {
  console.log(req.user);
  let email = req.user.email;
  User.findOne({ email }, (err, user) => {
    if (err) return next(err);
    if (!user) {
      Admin.findOne({ email }, (err, user) => {
        if (err) return next(err);
        return res.json({ success: true, user });
      });
    } else {
      res.json({ success: true, user });
    }
  });
});

module.exports = router;

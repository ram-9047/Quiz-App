const express = require("express");
const router = express.Router();
const Quiz = require("../../models/Quiz.js");

//create quiz
router.post("/create-quiz", function(req, res, next) {
  console.log(req.body, "inside crate quiz route");
  Quiz.create(req.body, (err, createdQuiz) => {
    if (err) return next(err);
    if (!createdQuiz)
      return res.status(400).json({ message: "no quiz found", success: false });
    if (createdQuiz) {
      console.log(createdQuiz, "created quiz");
      res.status(200).json({ createdQuiz, success: true });
    }
  });
});

//edit quiz

router.put("/:id", (req, res, next) => {
  let id = req.params.id;
  Quiz.findByIdAndUpdate(id, req.body, (err, editedQuiz) => {
    if (err) return next(err);
    if (!editedQuiz)
      return res.status(400).json({ message: "no quiz found", success: false });
    res.status(200).json({ editedQuiz, success: true });
  });
});

//delete quiz

router.delete("/:id"),
  (req, res, next) => {
    let id = req.params.id;
    Quiz.findByIdAndDelete(id, req, body, (err, deleteQuiz) => {
      if (err) return next(err);
      if (!deleteQuiz)
        return res
          .status(400)
          .json({ message: "no quiz found", success: false });
      res.status(200).json({ deleteQuiz, success: true });
    });
  };
module.exports = router;

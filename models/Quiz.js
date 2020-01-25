const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  // createdBy: {
  //   type: mongoose.SchemaTypes.ObjectId,
  //   ref: "Admin"
  // },
  question: {
    type: String,
    required: true
  },
  options: {
    a: {
      type: String,
      required: true
    },
    b: {
      type: String,
      required: true
    },
    c: {
      type: String,
      required: true
    },
    d: {
      type: String,
      required: true
    }
  },
  correctAnswer: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Quiz", QuizSchema);

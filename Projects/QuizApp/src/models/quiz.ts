import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

//schema
const quizSchema = new Schema(
  {
    name: {
      type: "string",
      required: true,
      unique: true,
    },
    question_lists: [
      {
        question_number: {
          type: "number",
        },
        question: String,
        options: {},
      },
    ],
    answers: {},
    created_by: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    is_published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("Quiz", quizSchema);
export default Quiz;

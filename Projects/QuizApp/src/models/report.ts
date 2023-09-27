import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

//schema
const reportSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    quizId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },

    score: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;

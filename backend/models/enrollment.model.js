import mongoose from "mongoose";

const enrollmentModel = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
        },
    marks: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["passed", "atkt", "dropped", "active"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

enrollmentModel.index({ student: 1 });
enrollmentModel.index({ course: 1 });

const enrollment = mongoose.model("enrollment", enrollmentModel);

export default enrollment;

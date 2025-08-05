import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
  {
    student_id: {
      type: String,
      required: true,
      unique: true,
    },
    studentProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },

    Branch: {
      type: String,
      required: true,
      enum: ["CSE", "IT", "Mechanical", "ECE", "Electrical"],
    },
    Admission_Date: {
      type: Date,
    },
    semester: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5, 6, 7, 8],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('student', studentSchema);

import mongoose from "mongoose";

/*
    marks
    teacher
    student
    name
    type
    duration
    outcome
    about
    syllabus
    passed/failed
    teacher id
    [{student, marks}, {student, marks}]
    isEditable
    notice
*/

const courseModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const course = mongoose.model("course", courseModel);

export default course;

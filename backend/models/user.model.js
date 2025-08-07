import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    Gender: {
      type: String,
      enum: ["Male", "Female", "Prefer Not To Say"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    college: {
      type: String,
      required: true,
      enum: ["Guru Ghasidas University"],
    },
    studentProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
    role: {
      type: String,
      enum: ["student", "admin", "moderator", "teacher"],
      required: true,
      default: "student",
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  Gender: {
    type: String,
    enum: ["Male", "Female", "Prefer Not To Say"]
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
    enum: ["Guru Ghasidas University"]
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator', 'teacher'],
    required: true,
    default: user,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  Branch: {
    type: String,
    required: true,
    enum: ['CSE', 'IT', 'Mechanical', 'ECE', 'Electrical']
  },
  Admission_Date: {
    type: Date,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

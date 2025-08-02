require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`MongoDB connected`);
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err.message);
    });
};

module.exports = connect;

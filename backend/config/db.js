import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB connected at ${process.env.MONGO_URI}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};

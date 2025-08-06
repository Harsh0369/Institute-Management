import Enrollment from "../models/enrollment.model.js";
import express from "express";

export const createEnrollment = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    if (!studentId || !courseId) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await Enrollment.findOne({
      student: studentId,
      course: courseId,
    });
    if (existing) {
      return res
        .status(409)
        .json({ message: "Student is already enrolled in this course" });
    }

    const newEnrollment = new Enrollment({
      student: studentId,
      course: courseId,
    });

    const savedEnrollment = await newEnrollment.save();
    res.status(201).json(savedEnrollment);
  } catch (error) {
    res.status(500).json({
      message: "Error creating enrollment",
      error: error.message,
    });
  }
};

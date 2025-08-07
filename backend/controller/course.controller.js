import express from "express";
import Course from "../models/course.model.js";
import Student from "../models/student.model.js";

// Create Course
export const createCourse = async (req, res) => {
  try {
    const { name, type, semester, description } = req.body;

    if (!name || !type || !semester || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCourse = new Course({
      name,
      type,
      semester,
      description,
    });

    const savedCourse = await newCourse.save();
    res.status(201).json(savedCourse);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error creating course", error: err.message });
  }
};

// Update Course
export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, type, semester, description } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { name, type, semester, description },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(updatedCourse);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating course", error: err.message });
  }
};

// Delete Course
export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting course", error: err.message });
  }
};

// Get Course by ID
export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching course", error: err.message });
  }
};

// Get Courses by Student's Semester
export const getCourses = async (req, res) => {
  try {
    const student = await Student.findOne({ studentProfile: req.user.id });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const courses = await Course.find({ semester: student.semester });
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

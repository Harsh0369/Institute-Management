import express from "express";
import course from "../models/course.model.js";

export const createCourse = (req, res) => {
  try {
    const { name, type, semester, description } = req.body;

    if (!name || !type || !semester || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newCourse = new course({
      name,
      type,
      semester,
      description,
    });

    newCourse
      .save()
      .then((course) => res.status(201).json(course))
      .catch((err) =>
        res.status(500).json({ message: "Error creating course", error: err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, type, semester, description } = req.body;

  course
    .findByIdAndUpdate(id, { name, type, semester, description }, { new: true })
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error updating course", error: err })
    );
};

export const deleteCourse = (req, res) => {
    const { id } = req.params;
    course.findByIdAndDelete(id)
      .then((course) => {
        if (!course) {
          return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json({ message: "Course deleted successfully" });
      })
      .catch((err) =>
        res.status(500).json({ message: "Error deleting course", error: err })
      );
};

export const getCourseById = (req, res) => {
  const { id } = req.params;

  course
    .findById(id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      res.status(200).json(course);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching course", error: err })
    );
};

export const getCourses = (req, res) => {
  try {
   course.find()
      .then((courses) => res.status(200).json(courses))
      .catch((err) =>
        res.status(500).json({ message: "Error fetching courses", error: err })
      );
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


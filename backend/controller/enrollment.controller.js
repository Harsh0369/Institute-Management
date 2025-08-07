export const createEnrollments = async (req, res) => {
  const studentId = req.studentId;
  const { courseIds } = req.body;

  if (!courseIds || !Array.isArray(courseIds) || courseIds.length === 0) {
    return res
      .status(400)
      .json({ message: "Course IDs must be a non-empty array" });
  }

  try {
    const existingEnrollments = await Enrollment.find({
      studentId,
      courseId: { $in: courseIds },
    });

    const alreadyEnrolledIds = existingEnrollments.map((e) =>
      e.courseId.toString()
    );
    const newCourseIds = courseIds.filter(
      (id) => !alreadyEnrolledIds.includes(id)
    );

    const enrollmentsToCreate = newCourseIds.map((courseId) => ({
      studentId,
      courseId,
    }));

    const createdEnrollments = await Enrollment.insertMany(enrollmentsToCreate);

    return res.status(201).json({
      message: "Enrollments created successfully",
      enrollments: createdEnrollments,
      skipped: alreadyEnrolledIds,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Failed to create enrollments", error: err });
  }
};

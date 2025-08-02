const mongoose = require('mongoose')

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

const courseModel = mongoose.Schema({

})

const course = mongoose.model('course', courseModel)

module.exports = course

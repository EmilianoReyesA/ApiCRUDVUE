// Controladores de estudiantes
const Student = require('../models/Student');

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get single student
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.json(student);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Create student
exports.createStudent = async (req, res) => {
    const { name1, name2, lastName1, lastName2, password } = req.body;
    try {
        const student = await Student.create({ name1, name2, lastName1, lastName2, password });
        res.status(201).json({ message: 'Student created successfully', studentId: student.id });
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update student
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        await student.update(req.body);
        res.send('Student updated successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete student
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        await student.destroy();
        res.send('Student deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

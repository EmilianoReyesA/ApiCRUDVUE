// Controlador encargado de la autorizacion de estudiantes mediante contraseña
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');

exports.login = async (req, res) => {
    const { id, password } = req.body;
    try {
        const student = await Student.findOne({ where: { id } });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        const match = await bcrypt.compare(password, student.password);
        if (!match) {
            return res.status(401).json({ message: 'Password is incorrect' });
        }

        const token = jwt.sign({ id: student.id }, 'your_secret_key', { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

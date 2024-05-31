// Controladores de materias
const Subject = require('../models/Subject');

// Get all subjects
exports.getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.findAll();
        res.json(subjects);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get single Subject
exports.getSubject = async (req, res) => {
    try {
        const subjects = await Subject.findByPk(req.params.id);
        if (!subjects) {
            return res.status(404).send('Subject not found');
        }
        res.json(subjects);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Create Subject
exports.createSubject = async (req, res) => {
    try {
        const subjects = await Subject.create(req.body);
        res.status(201).json(subjects);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update Subject
exports.updateSubject = async (req, res) => {
    try {
        const subjects = await Subject.findByPk(req.params.id);
        if (!subjects) {
            return res.status(404).send('Subject not found');
        }
        await subjects.update(req.body);
        res.send('Subject updated successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete Subject
exports.deleteSubject = async (req, res) => {
    try {
        const subjects = await Subject.findByPk(req.params.id);
        if (!subjects) {
            return res.status(404).send('Subject not found');
        }
        await subjects.destroy();
        res.send('Subject deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

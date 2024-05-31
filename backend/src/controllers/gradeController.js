// Controladores de calificaciones
const Grade = require('../models/Grade');
const { getAllGrades } = require('../services/gradeService');
const XLSX = require('xlsx');

// Get all grades
exports.retriveGrades = async (req, res) => {
    try {
        const grades = await Grade.findAll();
        res.json(grades);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get single Grade
exports.getGrade = async (req, res) => {
    try {
        const grades = await Grade.findByPk(req.params.id);
        if (!grades) {
            return res.status(404).send('Grade not found');
        }
        res.json(grades);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

//Export Grades to Excel
exports.exportGrades = async (req, res) => {
    try {
        // Recuperar todas las calificaciones
        const grades = await getAllGrades();
    
        // Convertir las instancias de modelo en datos planos
        const plainGrades = grades.map(grade => grade.get({ plain: true }));

        // Convertir la lista de calificaciones a un formato compatible con XLSX
        const worksheet = XLSX.utils.json_to_sheet(plainGrades);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Grades');
    
        // Generar el archivo Excel
        const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    
        // Enviar el archivo Excel como una respuesta
        res.setHeader('Content-Disposition', 'attachment; filename=grades.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (error) {
        console.error('Error al exportar las calificaciones a Excel:', error);
        res.status(500).send('Error al exportar las calificaciones a Excel');
    }
};

// Create Grade
exports.createGrade = async (req, res) => {
    try {
        const grades = await Grade.create(req.body);
        res.status(201).json(grades);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update Grade
exports.updateGrade = async (req, res) => {
    try {
        const grades = await Grade.findByPk(req.params.id);
        if (!grades) {
            return res.status(404).send('Grade not found');
        }
        await grades.update(req.body);
        res.send('Grade updated successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete Grade
exports.deleteGrade = async (req, res) => {
    try {
        const grades = await Grade.findByPk(req.params.id);
        if (!grades) {
            return res.status(404).send('Grade not found');
        }
        await grades.destroy();
        res.send('Grade deleted successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

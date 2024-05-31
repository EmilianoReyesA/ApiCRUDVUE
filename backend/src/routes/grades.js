// rutas de calificaciones
const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradeController');
//const authenticate = require('../middleware/authenticate');
/*
router.get('/', authenticate, gradeController.getAllGrades);
router.get('/:id', authenticate, gradeController.getGrade);
router.post('/', authenticate, gradeController.createGrade);
router.put('/:id', authenticate, gradeController.updateGrade);
router.delete('/:id', authenticate, gradeController.deleteGrade);
*/

router.get('/export', gradeController.exportGrades);
router.get('/', gradeController.retriveGrades);
router.get('/:id', gradeController.getGrade);
router.post('/', gradeController.createGrade);
router.put('/:id', gradeController.updateGrade);
router.delete('/:id', gradeController.deleteGrade);

module.exports = router;

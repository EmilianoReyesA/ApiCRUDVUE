// rutas de estudiantes
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
//const authenticate = require('../middleware/authenticate');
/*
router.get('/', authenticate, studentController.getAllStudents);
router.get('/:id', authenticate, studentController.getStudent);
router.post('/', authenticate, studentController.createStudent);
router.put('/:id', authenticate, studentController.updateStudent);
router.delete('/:id', authenticate, studentController.deleteStudent);
*/
router.get('/', studentController.getAllStudents);
router.get('/:id', studentController.getStudent);
router.post('/', studentController.createStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;

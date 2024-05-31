// rutas de materias
const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');
//const authenticate = require('../middleware/authenticate');
/*
router.get('/', authenticate, subjectController.getAllSubjects);
router.get('/:id', authenticate, subjectController.getSubject);
router.post('/', authenticate, subjectController.createSubject);
router.put('/:id', authenticate, subjectController.updateSubject);
router.delete('/:id', authenticate, subjectController.deleteSubject);
*/
router.get('/', subjectController.getAllSubjects);
router.get('/:id', subjectController.getSubject);
router.post('/', subjectController.createSubject);
router.put('/:id', subjectController.updateSubject);
router.delete('/:id', subjectController.deleteSubject);

module.exports = router;

const Grade = require('../models/Grade');

const getAllGrades = async () => {
  try {
    const grades = await Grade.findAll();
    return grades;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllGrades
};

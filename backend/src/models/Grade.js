const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Student = require('./Student');
const Subject = require('./Subject');

const Grade = sequelize.define('Grade', {
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'id'
    }
  },
  subjectId: {
    type: DataTypes.INTEGER,
    references: {
      model: Subject,
      key: 'id'
    }
  },
  score: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  }
}, {
  timestamps: true,
  primaryKey: ['studentId', 'subjectId']
});

Student.hasMany(Grade, { foreignKey: 'studentId' });
Subject.hasMany(Grade, { foreignKey: 'subjectId' });
Grade.belongsTo(Student, { foreignKey: 'studentId' });
Grade.belongsTo(Subject, { foreignKey: 'subjectId' });

module.exports = Grade;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

const Student = sequelize.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name2: {
        type: DataTypes.STRING
    },
    lastName1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName2: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(value, salt);
            this.setDataValue('password', hash);
        }
    }
}, {
    timestamps: true,
    hooks: {
        beforeCreate: async (student) => {
            if (student.password) {
                const salt = await bcrypt.genSalt(10);
                student.password = await bcrypt.hash(student.password, salt);
            }
        },
        beforeUpdate: async (student) => {
            if (student.password) {
                const salt = await bcrypt.genSalt(10);
                student.password = await bcrypt.hash(student.password, salt);
            }
        }
    }
});

module.exports = Student;

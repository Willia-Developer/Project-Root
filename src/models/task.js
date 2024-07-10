const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

User.hasMany(Task);
Task.belongsTo(User);

module.exports = Task;

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Todo;
};
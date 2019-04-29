'use strict';
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo, {foreignKey: "userId"})
  };
  User.beforeCreate((user,options)=>{
    let hash = bcrypt.hashSync(user.password, 8)
    user.password = hash
  })
  return User;
};
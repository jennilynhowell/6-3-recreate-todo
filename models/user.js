'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Todo, {as: 'todos', foreignKey: 'userId'});
    User.belongsToMany(models.Todo, {through: 'UserTodos', foreignKey: 'userId', otherKey: 'todoId'});
  }
  return User;

};

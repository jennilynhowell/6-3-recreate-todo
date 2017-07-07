'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    item: DataTypes.STRING,
    completed: DataTypes.DATE,
    assignee: DataTypes.STRING
  }, {});

  Todo.associate = function (models) {
    Todo.belongsTo(models.User, {foreignKey: 'userId'});
    Todo.belongsToMany(models.User, {through: 'UserTodos', foreignKey: 'todoId', otherKey: 'userId'});
  }
  return Todo;
};

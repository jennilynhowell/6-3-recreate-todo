'use strict';

module.exports = {
  up: function(queryInterface, Sequelize){
    return queryInterface.changeColumn(
      'Todos', //table (table is plural, not MODEL which represents one item)
      'userId', //field
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'Todos',
      'userId',
      {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    )
  }
};

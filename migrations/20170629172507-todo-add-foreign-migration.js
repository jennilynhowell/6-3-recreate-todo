"use strict";
//migrations almost always refer to tables so use plural naming
module.exports = {
  up: function(queryInterface, Sequelize){
    return queryInterface.addColumn(
      'Todos', //table (table is plural, not MODEL which represents one item)
      'userId', //field
      {
        type: Sequelize.INTEGER,
        //references establishes reference to the id col on the User table
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    )
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
}

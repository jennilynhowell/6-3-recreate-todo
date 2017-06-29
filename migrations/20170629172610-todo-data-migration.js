'use strict';

const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    //get all todos where userId is null
    //then update those to have a default userId of 1
    //save records
    models.Todo.update( //pass your sql statements in individual objects
      {userId: 1},
      {where: {userId: null}}
    )

  },

  down: function (queryInterface, Sequelize) {

  }
};

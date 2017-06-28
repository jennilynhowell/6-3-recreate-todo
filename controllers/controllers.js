const models = require('../models');

module.exports = {
  index: function(req, res){
    models.Todo.findAll({order: [['createdAt', 'DESC']]}).then(function(todos){
      res.render('index', {todos: todos})
    })
  },

  new: function(req, res){
    let newItem = req.body.addnew;
    let assignee = req.body.assignee;

    models.Todo.create(
      {
        item: newItem,
        assignee: assignee
      }).then(function(){
      models.Todo.findAll({order: [['createdAt', 'DESC']]}).then(function(todos){
      res.render('index', {todos:todos})
    })
    })
  },

  done: function(req, res) {
    let completeId = req.body.id;

    models.Todo.update(
      {completed: new Date()},
      {where: {id: completeId}}
    ).then(function(){
      models.Todo.findAll({order: [['createdAt', 'DESC']]}).then(function(todos){
      res.render('index', {todos:todos})
    })
    })
  },

  delete: function(req, res) {
    let deleteCompleted = req.body.delete;

    models.Todo.destroy(
      {where: {completed:{$ne: null}}}
    ).then(function(){
      models.Todo.findAll({order: [['createdAt', 'DESC']]}).then(function(todos){
      res.render('index', {todos:todos})
    })
    })
  }
}

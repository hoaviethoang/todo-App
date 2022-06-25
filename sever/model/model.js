const db = require('../database/connection');
const todoApp = function(todo){
  this.id= todo.id;
  this.name = todo.name;
  this.email= todo.email;
  this.gender = todo.gender;
  this.status = todo.status;
}

todoApp.get_all=function(result) {
  db.query("SELECT *FROM todolist",function(err,todo){
    if(err){
      return result(err);
      return
    }
    result(todo);
  })
}
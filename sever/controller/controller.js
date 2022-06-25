var Userdb= require('../model/model');


exports.create = (req,res) => {
  res.render('show',{
    id:1,
    name:'hoang',
    email:' andyhoang2k@gmail.com',
    gender: female,
    status: active,
  });
}

exports.find = (req,res) => {

}

exports.update = (req,res) => {

}

exports.delete = (req,res) => {

}
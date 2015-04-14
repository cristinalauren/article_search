"use strict";
var bcrypt= require('bcrypt'),
    salt= bcrypt.genSaltSync(10);

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email:{
      type:DataTypes.STRING,
      unique: true,
      validate: {
        len:[6,30]
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    instanceMethods:{
      checkPassword: function(password){
        return bcrypt.compareSync(password, this.password);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
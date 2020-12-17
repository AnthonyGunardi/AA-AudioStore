'use strict';
const {
  Model
} = require('sequelize');
const Helper = require('../helper/helper')
const nodemailer = require('nodemailer')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      User.belongsToMany(models.Product, {through: models.Transaction})
    }
    static sendingEmail(email){     //Static Method
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
          user: 'aa.audiostore@gmail.com',
          pass: 'audiostore'
        }
      })
      let mailOptions = {
        from: 'aa.audiostore@gmail.com',
        to: email,
        subject: 'Welcome To AA Audio Store!',
        text: `Hello ! Thank You for your first register in AA Audio Store ! Let's Enjoy The Music`
      }
      transporter.sendMail(mailOptions, (err, data)=>{
        if(err) return false
        else return true
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_admin: DataTypes.BOOLEAN
  }, {
    hooks:{
      beforeCreate(instance, options){
        instance.password = Helper.hashPassword(instance.password)
        let dataAdmin = require('../data/AdminData.json')
        let isAdmin = dataAdmin.filter((e)=> e === instance.username)
        if(isAdmin.length) instance.role_admin = true
        else instance.role_admin = false
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
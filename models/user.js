'use strict';
const {
  Model
} = require('sequelize');
const { hashedPassword } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'full name is required'
        },
        notNull: {
          msg: 'full name is required'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg : 'username is already used'
      },
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'username is required'
        },
        notNull: {
          msg: 'username is required'
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'password is required'
        },
        notNull: {
          msg: 'password is required'
        },
        len: {
          args: [6],
          msg: "Password's length minimum 6 character",
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    user.password = hashedPassword(user.password)
  })
  return User;
};
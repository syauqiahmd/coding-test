// const { where } = require('sequelize')
const { hashedPassword, signedToken, comparePassword } = require('../helpers')
const {User} = require('../models')

class userController{
  static async login(req, res, next){
    try {
      const {username, password} = req.body

      if(!username || !password){
        throw {name: 'invalid_login'}
      }

      const user = await User.findOne({
        where:{username}
      })
      if(!user){
        throw {name: 'invalid_login'}
      } else if(!comparePassword(password, user.password)){
        throw {name: 'invalid_login'}
      }
      const payload = {
        id : user.id
      }
      const access_token = signedToken(payload)
      res.status(200).json({access_token})
    } catch (err) {
      next(err)
    }
  }

  static async register(req, res, next){
    try {
      const {fullName, username, password} = req.body
      const user = await User.create({fullName, username, password})
      const responseData = {
        status : "register success",
        username : user.username
      }
      res.status(201).json(responseData)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController
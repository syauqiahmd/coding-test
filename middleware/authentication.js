const { User } = require("../models/index")
const { verifyToken } = require('../helpers/index')

const authentication = async (req, res, next)=>{
  try {
    const { access_token } = req.headers
    if(!access_token){
      throw { name : "invalid_token" }
    }
    const payload = verifyToken(access_token)
    const user = await User.findByPk(payload.id)
    if (!user) {
      throw { name: "invalid_token" };
    }
    req.user = {
      id: user.id
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication
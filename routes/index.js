const express = require('express')
const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')
const router = express.Router()

router.get('/test', (req, res) => {
  res.status(200).json({message: "OK"})
})

router.post('/login', userController.login)
router.post('/register', userController.register)

router.use(authentication)

module.exports = router
const express = require('express')
const jobController = require('../controllers/jobController')
const userController = require('../controllers/userController')
const authentication = require('../middleware/authentication')
const router = express.Router()

router.get('/test', (req, res) => {
  res.status(200).json({message: "OK"})
})

router.post('/login', userController.login)
router.post('/register', userController.register)

router.use(authentication)
router.get('/jobs', jobController.findAll)
router.get('/jobs/:id', jobController.findOne)

module.exports = router
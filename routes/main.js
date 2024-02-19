const express = require('express')
const router = express.Router()
const {login,dashboard} = require('./../controllers/mainController')
const auth = require('./../middleware/auth')

router.route('/dashboard').get(auth,dashboard)

router.post('/login',login)

module.exports = router
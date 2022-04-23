const express = require('express')
const {login, signup, logout} = require('../api/auth/auth.controller')

const router = express.Router()

router.post('/login', login)
router.put('/signup', signup)
router.post('/logout', logout)

module.exports = router
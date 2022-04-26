const express = require('express')
const {login, register, logout} = require('../api/auth/auth.controller')

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)

module.exports = router
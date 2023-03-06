const express = require('express')
const router = express.Router()

const weaponRoutes = require('./weaponRoutes')


router.use('/weapons', weaponRoutes)

router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Welcome to the API' })
})

module.exports = router

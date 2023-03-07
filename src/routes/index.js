const express = require('express')
const router = express.Router()

const weaponRoutes = require('./weaponRoutes')
const armorRoutes = require('./armorRoute')


router.use('/weapons', weaponRoutes)
router.use('/armors', armorRoutes)

router.get('/', function (req, res, next) {
  res.status(200).json({ message: 'Welcome to the API' })
})

module.exports = router

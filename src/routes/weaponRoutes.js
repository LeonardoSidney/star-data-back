const express = require('express')
const router = express.Router()
const weaponController = require('../controllers/weaponController')

router.get('/', weaponController.index)
router.post('/', weaponController.create)
router.get('/:id', weaponController.find)
router.put('/:id', weaponController.update)
router.delete('/:id', weaponController.delete)

module.exports = router

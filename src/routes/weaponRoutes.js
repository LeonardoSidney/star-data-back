const express = require('express')
const router = express.Router()
const weaponController = require('../controllers/weaponController')
const { validateWeapon } = require('../middlewares/weaponValidation')

router.get('/', weaponController.index)
router.post('/', validateWeapon, weaponController.create)
router.get('/:id', weaponController.find)
router.put('/:id', validateWeapon, weaponController.update)
router.delete('/:id', weaponController.delete)

module.exports = router

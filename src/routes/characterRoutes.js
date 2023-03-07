const express = require('express')
const router = express.Router()
const characterController = require('../controllers/characterController')
const { validateCharacter } = require('../middlewares/characterValidation')

router.get('/', characterController.index)
router.post('/', validateCharacter, characterController.create)
router.get('/:id', characterController.find)
router.put('/:id', validateCharacter, characterController.update)
router.delete('/:id', characterController.delete)

module.exports = router

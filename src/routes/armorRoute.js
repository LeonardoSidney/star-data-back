const express = require('express');
const router = express.Router();
const armorController = require('../controllers/ArmorController');
const { validateArmor } = require('../middlewares/armorValidation');

router.get('/', armorController.index);
router.post('/', validateArmor, armorController.create);
router.get('/:id', armorController.find);
router.put('/:id', validateArmor, armorController.update);
router.delete('/:id', armorController.delete);

module.exports = router;

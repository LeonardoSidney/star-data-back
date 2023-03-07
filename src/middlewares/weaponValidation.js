const Joi = require('joi')

const weaponSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  description: Joi.string(),
  damage: Joi.number().required()
})


const validateWeapon = (req, res, next) => {
  const { error } = weaponSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  next()
}

module.exports = { weaponSchema, validateWeapon }

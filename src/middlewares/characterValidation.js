const Joi = require('joi')
const { armorSchema } = require('./armorValidation')
const { weaponSchema } = require('./weaponValidation')

const characterSchema = Joi.object({
  name: Joi.string().required(),
  race: Joi.string().valid('Humano', 'Wookiee', 'Twilek', 'Kel Dor', 'Mirialan', 'Mandaloriano', 'Jedi').required(),
  homeworld: Joi.string(),
  age: Joi.number(),
  height: Joi.number(),
  description: Joi.string().max(500),
  weapon: weaponSchema,
  armor: armorSchema
});


const validateCharacter = (req, res, next) => {
  const { error } = characterSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  next()
}

module.exports = { characterSchema, validateCharacter }

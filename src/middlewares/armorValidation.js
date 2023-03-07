const Joi = require('joi');

const armorSchema = Joi.object({
  _id: Joi.string().length(24).hex(),
  name: Joi.string().required(),
  protection: Joi.number().required(),
  type: Joi.string().valid('Leve', 'Média', 'Pesada').required(),
  material: Joi.string().valid('Beskar', 'Krybes', 'Durasteel', 'Talz', 'Ferro Zillo').required(),
  restricted_to: Joi.array().items(Joi.string().valid('Humanos', 'Wookiees', 'Twileks', 'Kel Dor', 'Mirialan', 'Mandalorianos', 'Jedis')).required(),
});

const validateArmor = (req, res, next) => {
  const { error } = armorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateArmor, armorSchema };

const mongoose = require('mongoose')
const { weaponSchema } = require('./Weapon')
const { armorSchema } = require('./Armor')

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  race: {
    type: String,
    enum: ['Humano', 'Wookiee', 'Twilek', 'Kel Dor', 'Mirialan', 'Mandaloriano', 'Jedi'],
    required: true
  },
  homeworld: { type: String },
  age: { type: Number },
  height: { type: Number },
  description: { type: String, maxlength: 500 },
  weapon: weaponSchema,
  armor: armorSchema,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const Character = mongoose.model('Character', characterSchema)

module.exports = { Character, characterSchema }

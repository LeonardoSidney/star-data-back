const mongoose = require('mongoose')

const armorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  protection: { type: Number, required: true },
  type: {
    type: String,
    enum: ['Leve', 'Média', 'Pesada'],
    required: true
  },
  material: {
    type: String,
    enum: ['Beskar', 'Krybes', 'Durasteel', 'Talz', 'Ferro Zillo'],
    required: true
  },
  restricted_to: {
    type: [{
      type: String,
      enum: ['Humanos', 'Wookiees', 'Twileks', 'Kel Dor', 'Mirialan', 'Mandalorianos', 'Jedis']
    }],
    required: true
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

const Armor = mongoose.model('Armor', armorSchema)

module.exports = { Armor, armorSchema }

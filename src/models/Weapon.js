const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  damage: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Weapon = mongoose.model('Weapon', weaponSchema);

module.exports = Weapon;

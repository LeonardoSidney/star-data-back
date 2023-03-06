const Weapon = require('../models/Weapon')

const routes = {}

routes.create = async (req, res, next) => {
  try {
    const body = req.body
    console.log('body :>> ', body);
    const weapon = new Weapon(body)
    console.log('weapon :>> ', weapon);
    const result = await weapon.save()
    console.log('result :>> ', result);
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

routes.index = async (req, res, next) => {
  try {
    const weapons = await Weapon.find()
    res.status(200).json(weapons)
  } catch (err) {
    next(err)
  }
}

routes.find = async (req, res, next) => {
  try {
    const id = req.params.id
    const weapon = await Weapon.findById(id)
    if (!weapon) {
      res.status(204).json({ message: 'Weapon not found' })
      return
    }
    res.status(200).json(weapon)
  } catch (err) {
    next(err)
  }
}

routes.update = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body
    const weapon = await Weapon.findByIdAndUpdate(id, body, {
      new: true
    })
    if (!weapon) {
      res.status(204).json({ message: 'Weapon not found' })
      return
    }
    res.status(200).json(weapon)
  } catch (err) {
    next(err)
  }
}

routes.delete = async (req, res, next) => {
  try {
    const id = req.params.id
    const weapon = await Weapon.findByIdAndDelete(id)
    if (!weapon) {
      res.status(204).json({ message: 'Weapon not found' })
      return
    }
    res.status(200).json({ message: 'Weapon deleted successfully' })
  } catch (err) {
    next(err)
  }
}

module.exports = routes

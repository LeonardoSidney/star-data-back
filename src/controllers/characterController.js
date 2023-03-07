const { Character } = require('../models/Character')

const routes = {}

routes.create = async (req, res, next) => {
  try {
    const character = new Character(req.body)
    const result = await character.save()
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

routes.index = async (req, res, next) => {
  try {
    const characters = await Character.find()
    res.status(200).json(characters)
  } catch (err) {
    next(err)
  }
}

routes.find = async (req, res, next) => {
  try {
    const id = req.params.id
    const character = await Character.findById(id)
    if (!character) {
      res.status(204).json({ message: 'Character not found' })
      return
    }
    res.status(200).json(character)
  } catch (err) {
    next(err)
  }
}

routes.update = async (req, res, next) => {
  try {
    const id = req.params.id
    const body = req.body
    const character = await Character.findByIdAndUpdate(id, body, {
      new: true,
    })
    if (!character) {
      res.status(204).json({ message: 'Character not found' })
      return
    }
    res.status(200).json(character)
  } catch (err) {
    next(err)
  }
}

routes.delete = async (req, res, next) => {
  try {
    const id = req.params.id
    const character = await Character.findByIdAndDelete(id)
    if (!character) {
      res.status(204).json({ message: 'Character not found' })
      return
    }
    res.status(200).json({ message: 'Character deleted successfully' })
  } catch (err) {
    next(err)
  }
}

module.exports = routes

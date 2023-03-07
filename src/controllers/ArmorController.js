const { Armor } = require('../models/Armor');

const routes = {};

routes.create = async (req, res, next) => {
  try {
    const body = req.body;
    const armor = new Armor(body);
    const result = await armor.save();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

routes.index = async (req, res, next) => {
  try {
    const armors = await Armor.find();
    res.status(200).json(armors);
  } catch (err) {
    next(err);
  }
};

routes.find = async (req, res, next) => {
  try {
    const id = req.params.id;
    const armor = await Armor.findById(id);
    if (!armor) {
      res.status(204).json({ message: 'Armor not found' });
      return;
    }
    res.status(200).json(armor);
  } catch (err) {
    next(err);
  }
};

routes.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log('body :>> ', body);
    const armor = await Armor.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!armor) {
      res.status(204).json({ message: 'Armor not found' });
      return;
    }
    res.status(200).json(armor);
  } catch (err) {
    next(err);
  }
};

routes.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    const armor = await Armor.findByIdAndDelete(id);
    if (!armor) {
      res.status(204).json({ message: 'Armor not found' });
      return;
    }
    res.status(200).json({ message: 'Armor deleted successfully' });
  } catch (err) {
    next(err);
  }
};

module.exports = routes;

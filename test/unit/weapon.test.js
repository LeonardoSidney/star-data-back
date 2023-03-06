const assert = require('chai').assert
const Weapon = require('../../src/models/Weapon')
const { DateTime } = require('luxon');

describe('@unit Weapon', function () {
  describe('Model definition', function () {
    it('should define the Weapon model', function () {
      assert.isDefined(Weapon, 'Weapon model is not defined')
    })
  })

  describe('Instance creation', function () {
    it('should create a valid instance of Weapon', function () {
      const currentTime = DateTime.utc().toJSDate()
      const weaponData = {
        name: 'Sword',
        type: 'Melee',
        description: 'A sharp metal sword',
        damage: 10,
        created_at: currentTime,
        updated_at: currentTime
      }

      const weapon = new Weapon(weaponData)

      const weaponObject = weapon.toObject()
      delete weaponObject._id

      assert.instanceOf(weapon, Weapon, 'weapon is not an instance of Weapon')
      assert.deepEqual(weaponObject, weaponData, 'weapon data does not match')
      assert.propertyVal(weapon, 'name', weaponData.name, 'name does not match')
      assert.propertyVal(weapon, 'type', weaponData.type, 'type does not match')
      assert.propertyVal(weapon, 'description', weaponData.description, 'description does not match')
      assert.propertyVal(weapon, 'damage', weaponData.damage, 'damage does not match')
      assert.propertyVal(weapon, 'created_at', weaponData.created_at, 'created_at does not match')
      assert.propertyVal(weapon, 'updated_at', weaponData.updated_at, 'updated_at does not match')
    })

    it('should detect invalid instance of Weapon', function () {
      const requiredProperties = ['name', 'type'];
      const weaponData = {}

      const weapon = new Weapon(weaponData)
      const validationErrors = weapon.validateSync()

      assert.isDefined(validationErrors, 'validationErrors should be defined')
      requiredProperties.forEach((prop) => {
        assert.property(validationErrors.errors, prop, `${prop} is not a required field`);
      });
    })
  })
})

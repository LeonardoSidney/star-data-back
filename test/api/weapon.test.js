const app = require('../../app');
const request = require('supertest');
const mongoose = require('mongoose');
const Weapon = require('../../src/models/Weapon');

describe('POST /weapons', () => {
  it('should create a weapon', async () => {
    const weaponData = { name: 'Weapon 1', type: 'Type 1' };
    const res = await request(app)
      .post('/weapons')
      .send(weaponData)
      .expect(201);

    expect(res.body.name).to.equal(weaponData.name);
    expect(res.body.type).to.equal(weaponData.type);

    const weapon = await Weapon.findById(res.body._id);
    expect(weapon.name).to.equal(weaponData.name);
    expect(weapon.type).to.equal(weaponData.type);
  });
});

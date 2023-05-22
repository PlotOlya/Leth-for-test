const { Table } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Table.bulkCreate([
      {
        number: 1,
        capacity: 4,
      },
      {
        number: 2,
        capacity: 4,
      },
      {
        number: 3,
        capacity: 4,
      },
      {
        number: 4,
        capacity: 4,
      },
      {
        number: 5,
        capacity: 4,
      },
      {
        number: 6,
        capacity: 4,
      },
      {
        number: 7,
        capacity: 4,
      },
      {
        number: 8,
        capacity: 4,
      },
      {
        number: 9,
        capacity: 4,
      },
      {
        number: 10,
        capacity: 4,
      },
      {
        number: 11,
        capacity: 6,
      },
      {
        number: 12,
        capacity: 6,
      },
      {
        number: 13,
        capacity: 6,
      },
      {
        number: 14,
        capacity: 6,
      },
      {
        number: 15,
        capacity: 6,
      },
      {
        number: 16,
        capacity: 2,
      },
      {
        number: 17,
        capacity: 2,
      },
      {
        number: 18,
        capacity: 2,
      },
      {
        number: 19,
        capacity: 2,
      },
    ]);
  },

  async down() {
    await Table.destroy({ truncate: { cascade: true } });
  },
};

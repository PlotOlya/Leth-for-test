'use strict';
const { Time } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Time.bulkCreate([
      {
        time: '12:00',
      },
      {
        time: '12:30',
      },
      {
        time: '13:00',
      },
      {
        time: '13:30',
      },
      {
        time: '14:00',
      },
      {
        time: '14:30',
      },
      {
        time: '15:00',
      },
      {
        time: '15:30',
      },
      {
        time: '16:00',
      },
      {
        time: '16:30',
      },
      {
        time: '17:00',
      },
      {
        time: '17:30',
      },
      {
        time: '18:00',
      },
      {
        time: '18:30',
      },
      {
        time: '19:00',
      },
      {
        time: '19:30',
      },
      {
        time: '20:00',
      },
      {
        time: '20:30',
      },
      {
        time: '21:00',
      },
      {
        time: '21:30',
      },
      {
        time: '22:00',
      },
      {
        time: '22:30',
      },
      {
        time: '23:00',
      },
    ]);
  },

  async down () {
    await Time.destroy({ truncate: { cascade: true } });
  }
};

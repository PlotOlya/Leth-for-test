'use strict';
const bcrypt = require('bcrypt');

const { Admin , Reservation, Certificate } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Admin.bulkCreate([{
      login: 'admin',
      password: await bcrypt.hash('1234', 5),
    }]);
    await Reservation.bulkCreate([{
      name: 'Рыжков Иван Александрович',
      phoneNumber: +79213506343,
      email: 'vanya.ruzhcov@gmail.com',
      date: '2023-05-25',
      time: '11:30',
      comment: 'гууууд',
      status: 'netu',
    }]);
    await Certificate.bulkCreate([{
      name: 'Ivan',
      phoneNumber: +89213506343,
      email: 'vanya@gamail.com',
      numberCertificates: 'dofvsnfepfk[amfpamsfipnepifm',
      amount: 10000,
      status: 'netu',
    }]);
  },

  async down (queryInterface, Sequelize) {
    await Admin.destroy({ truncate: { cascade: true } });
    await Reservation.destroy({ truncate: { cascade: true } });
    await Certificate.destroy({ truncate: { cascade: true } });
  },
};

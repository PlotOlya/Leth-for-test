const bcrypt = require('bcrypt');

const { Admin, Reservation, Certificate } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Admin.bulkCreate([
      {
        login: 'admin',
        password: await bcrypt.hash('1234', 5),
      },
    ]);
    await Reservation.bulkCreate([
      {
        name: 'Рыжков Иван Александрович',
        phoneNumber: +79213506343,
        email: 'vanya.ruzhcov@gmail.com',
        date: new Date(2023, 4, 22, 14, 30),
        table_id: 1,
        comment: 'гд',
        status: 'netu',
      },
      {
        name: 'Рыжков Иан Александрович',
        phoneNumber: +79213506333,
        email: 'vanya.ruzhcov@gmail.com',
        date: new Date(2023, 4, 22, 13, 30),
        time_id: 3,
        table_id: 4,
        comment: 'гуууу',
        status: 'netu',
      },
      {
        name: 'Рыков Иван Александрович',
        phoneNumber: +79213506341,
        email: 'vanya.ruzhcov@gmail.com',
        date: new Date(2023, 4, 22, 15, 30),
        time_id: 6,
        table_id: 9,
        comment: 'гууууд',
        status: 'netu',
      },
    ]);
    await Certificate.bulkCreate([
      {
        name: 'Ivan',
        phoneNumber: +89213506343,
        email: 'vanya@gamail.com',
        numberCertificates: 'dofvsnfepfk[amfpamsfipnepifm',
        amount: 10000,
        status: 'netu',
      },
    ]);
  },

  async down() {
    await Admin.destroy({ truncate: { cascade: true } });
    await Reservation.destroy({ truncate: { cascade: true } });
    await Certificate.destroy({ truncate: { cascade: true } });
  },
};

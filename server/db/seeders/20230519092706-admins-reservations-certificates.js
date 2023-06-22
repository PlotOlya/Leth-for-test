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
        name: 'Рыжков Иван',
        phoneNumber: +79213506343,
        email: 'vanya.ruzhcov@gmail.com',
        date: new Date(2023, 4, 22, 14, 30),
        table: 4,
        guests: 2,
        comment: 'Аллергия на лактозу, цитрусовые, арахис, глютен, вегетарианец',
        status: true,
      },
      {
        name: 'Бибов Ясос Ольгович',
        phoneNumber: +79213506333,
        email: 'vanya.ruzhcov@gmail.com',
        date: new Date(2023, 4, 22, 13, 30),
        guests: 13,
        comment: '6 собак и 5 детей, требуем посадить нас к окну',
        status: false,
      },
      {
        name: 'Дятлов Валентин Сергеевич',
        phoneNumber: +792135063441,
        email: 'dyatelVS@gmail.com',
        date: new Date(2023, 4, 22, 15, 30),
        guests: 3,
        table: 9,
        comment: 'Ребенок 8 лет',
        status: true,
      },
      {
        name: 'Милютин Ибрагим Ольфасович Оглы',
        phoneNumber: +79213506387,
        email: 'qaqoeto@choto.kak',
        date: new Date(2023, 4, 25, 15, 30),
        guests: 2,
        table: 11,
        comment: 'Ребенок 8 лет',
        status: true,
      },
      {
        name: 'Отец Анатолий',
        phoneNumber: +7921384651,
        email: 'batya@gamail.com',
        date: new Date(2023, 4, 25, 18, 30),
        guests: 2,
        comment: 'Буду с доброй таксой',
        status: false,
      },
      {
        name: 'Мама Аня',
        phoneNumber: +79213856198,
        email: 'anya@gamail.com',
        date: new Date(2023, 4, 25, 19, 30),
        guests: 2,

        comment: 'Доооооооброе ууууууутро, ААААААААААня, буду не одна...',
        status: false,
      },
      {
        name: 'Сеньор Артемьос',
        phoneNumber: +79213851789,
        email: 'mr_thomas_teller@gamail.com',
        date: new Date(2023, 4, 26, 19, 30),
        guests: 4,
        comment: 'Есть настолки?',
        status: false,
      },
      {
        name: 'Босс Юрий',
        phoneNumber: +79213851765,
        email: 'bigboss@gamail.com',
        date: new Date(2023, 4, 26, 12, 30),
        guests: 3,
        comment: 'Приеду на велосипеде',
        status: false,
      },
      {
        name: 'Лиза',
        phoneNumber: +79213814977,
        email: 'elizaveth@gamail.com',
        date: new Date(2023, 4, 26, 14, 0),
        guests: 3,
        comment: 'Вы супер, хочу черешню',
        status: false,
      },
    ]);
    await Certificate.bulkCreate([
      {
        name: 'Отец Анатолий',
        phoneNumber: +89213506343,
        email: 'batya@gamail.com',
        numberCertificates: '1235',
        amount: 5000,
        status: true,
      },
      {
        name: 'Мама Аня',
        phoneNumber: +8921546327,
        email: 'anya@gamail.com',
        numberCertificates: '8465',
        amount: 5000,
        status: true,
      },
      {
        name: 'Сеньор Артемьос',
        phoneNumber: +8921465189,
        email: 'mr_thomas_teller@gamail.com',
        numberCertificates: '5416',
        amount: 5000,
        status: true,
      },
      {
        name: 'Лиза',
        phoneNumber: +892146794,
        email: 'elizaveth@gamail.com',
        numberCertificates: '4238',
        amount: 5000,
        status: true,
      },
      {
        name: 'Босс Юрий',
        phoneNumber: +892846516,
        email: 'bigboss@gamail.com',
        numberCertificates: '1587',
        amount: 9999999,
        status: true,
      },
    ]);
  },

  async down() {
    await Admin.destroy({ truncate: { cascade: true } });
    await Reservation.destroy({ truncate: { cascade: true } });
    await Certificate.destroy({ truncate: { cascade: true } });
  },
};

const mainRouter = require('express').Router();

const { Table, Reservation } = require('../../db/models');
const mailer = require('../../nodemailer');

// запрос массива времени
mainRouter.get('/', async (req, res) => {
  try {
    const tablesList = await Table.findAll();
    const reservationList = await Reservation.findAll();
    if (tablesList && reservationList) {
      res.status(200).json({ tablesList, reservationList });
    } else {
      res.status(400).json({ success: false, message: 'Записи не найдены' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

mainRouter.put('/:id/update', async (req, res) => {
  try {
    const { name, phoneNumber, guests, email, date, table, comment, status } =
      req.body;
    const reservOne = await Reservation.findByPk(Number(req.params.id));
    // if (!reservOne || req.session.adminId) {
    //   res.status(404).json({ success: false, message: 'Запись не найдена' });
    //   return;
    // }
    if (reservOne) {
      reservOne.name = name;
      reservOne.phoneNumber = phoneNumber;
      reservOne.guests = guests;
      reservOne.email = email;
      reservOne.date = date;
      reservOne.table = table;
      reservOne.comment = comment;
      reservOne.status = status;
      await reservOne.save();
      res.status(200).json(reservOne);
    } else {
      res
        .status(400)
        .json({ success: false, message: 'Такая запись не найдена' });
    }

    const message = {
      to: req.body.email,
      subject: 'Бронирование в ресторане Leth',
      text: `Здравствуйте, ${req.body.name}.
      
      Ваш зарпрос на бронирование подтвержден. Мы с нетерпение ждем встречи с вами.

      Детали бронирования:
      ${req.body.name}
      ${req.body.guests}
      ${req.body.date}
      
      Просим обратить внимание на то, что посещение ограничено 2 часами!
      `,
    };

    if (req.body.table) {
      mailer(message);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

module.exports = mainRouter;

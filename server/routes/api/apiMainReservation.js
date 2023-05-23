const mainReservationRouter = require('express').Router();
const { Reservation } = require('../../db/models');

mainReservationRouter.post('/', async (req, res) => {
  try {
    // проверяем есть ли такой пользователь в бд, если есть отправляем ошибку
    const reservation = await Reservation.findOne({ where: { phoneNumber: req.body.number } });
    if (reservation) {
      res.status(400).json({ message: 'Бронь уже существует' });
      return;
    }
    console.log('route', req.body);
    const data = req.body;

    const newReservation = await Reservation.create({
      name: data.name,
      phoneNumber: data.number,
      email: data.email,
      date: `${data.date} ${data.time}`,
      guests: data.guests,
      comment: data.comment,
      status: data.status,
    

    });
    res.status(201).json(newReservation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

module.exports = mainReservationRouter;

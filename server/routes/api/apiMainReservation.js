const router = require('express').Router();
const { Reservation } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    // проверяем есть ли такой пользователь в бд, если есть отправляем ошибку
    const reservation = await Reservation.findOne({ where: { number: req.body.number } });
    if (reservation) {
      res.status(400).json({ message: 'Бронь уже существует' });
      return;
    }

    const newReservation = await Reservation.create(req.body);
    console.log(req.body)
    res.status(201).json(newReservation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

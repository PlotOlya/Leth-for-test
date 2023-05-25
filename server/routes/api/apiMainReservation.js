const mainReservationRouter = require('express').Router();
const { Reservation } = require('../../db/models');

mainReservationRouter.post('/', async (req, res) => {
  try {
    const data = req.body;

    const newReservation = await Reservation.create({
      name: data.name,
      phoneNumber: data.number,
      email: data.email,
      date: `${data.date} ${data.time}`,
      guests: data.guests,
      comment: data.comment,
      table: data.table,
      status: data.status,
    });
    res.status(201).json(newReservation);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

module.exports = mainReservationRouter;

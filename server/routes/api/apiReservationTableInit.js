const mainRouter = require('express').Router();

const { Table, Reservation } = require('../../db/models');

// запрос массива времени
mainRouter.get('/', async (req, res) => {
  try {
    const tablesList = await Table.findAll();
    const reservationList = await Reservation.findAll();
    console.log(tablesList);
    res.status(200).json({ tablesList, reservationList });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = mainRouter;

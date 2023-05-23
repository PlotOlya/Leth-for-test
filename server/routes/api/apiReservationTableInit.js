const mainRouter = require('express').Router();

const { Table, Reservation } = require('../../db/models');

// запрос массива времени
mainRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const tablesList = await Table.findAll();
      const reservationList = await Reservation.findAll();
      console.log('table', tablesList);
      res.status(200).json({ tablesList, reservationList });
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  })
  .put(async (req, res) => {
    try {
      const {} = req.body;
      const reserv = await Reservation.findOne();
    } catch (error) {
      console.error(error);
      res.status(500).json(error.message);
    }
  });

module.exports = mainRouter;

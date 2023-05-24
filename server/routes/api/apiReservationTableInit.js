const mainRouter = require('express').Router();

const { Table, Reservation } = require('../../db/models');

// запрос массива времени
mainRouter.get('/', async (req, res) => {
  try {
    const tablesList = await Table.findAll();
    const reservationList = await Reservation.findAll();
    // console.log('table', tablesList);
    res.status(200).json({ tablesList, reservationList });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

mainRouter.put('/:id/update', async (req, res) => {
  try {
    const { reserv } = req.body;
    console.log('reserv', reserv);
    console.log('req.params.id', req.params.id);
    const reservOne = await Reservation.findByPk(Number(req.params.id));
    console.log('reservOne', reservOne);
    // if (!reservOne || req.session.adminId) {
    //   res.status(404).json({ success: false, message: 'Запись не найдена' });
    //   return;
    // }
  } catch (error) {
    console.error(error);
    res.status(500).json(error.message);
  }
});

module.exports = mainRouter;

const mainRouter = require('express').Router();

const { Time, Table } = require('../../db/models');

// запрос массива времени
mainRouter.get('/', async (req, res) => {
  try {
    const timeList = await Time.findAll();
    const tablesList = await Table.findAll();
    res.status(200).json({ timeList, tablesList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = mainRouter;

const certificateRoute = require('express').Router();

const { Certificate } = require('../../db/models');

certificateRoute.get('/', async (req, res) => {
  try {
    const certificateList = await Certificate.findAll();
    console.log(certificateList);
    res.status(200).json({ certificateList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = certificateRoute;

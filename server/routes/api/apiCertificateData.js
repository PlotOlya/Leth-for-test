const { v4: uuidv4 } = require('uuid');

const certificateRoute = require('express').Router();

const { Certificate } = require('../../db/models');

certificateRoute.post('/', async (req, res) => {
  try {
    const data = req.body;
    const certificateList = await Certificate.create({
      name: data.name,
      email: data.email,
      amount: data.amount,
      numberCertificates: uuidv4(),
      status: 'activ',
    });
    // console.log(certificateList);
    res.status(200).json({ certificateList });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = certificateRoute;

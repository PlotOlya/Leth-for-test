const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const getUser = require('../middlewares/getUser');

const serverConfig = (app) => {
  // app.use(getUser);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
};

module.exports = serverConfig;

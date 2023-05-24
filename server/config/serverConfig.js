const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const sessionConfig = require('./session');

const serverConfig = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  app.use(session(sessionConfig));
};

module.exports = serverConfig;

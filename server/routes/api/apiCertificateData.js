/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
// const { v4: uuidv4 } = require('uuid');

const certificateRoute = require("express").Router();

const { Certificate } = require("../../db/models");

const mailer = require("../../nodemailer");

certificateRoute.post("/", async (req, res) => {
  try {
    const data = req.body;
    const certificateList = await Certificate.create({
      name: data.name,
      email: data.email,
      amount: data.amount,

      numberCertificates: Math.floor(Math.random() * 10000),
      status: true,
    });

    const message = {
      to: req.body.email,
      subject: "Сертификат",
      text: `поздравляю, вы успешно приобрели Сертификат !!
      
      данные вашей учетной записи
      login: ${req.body.email}
      amount: ${req.body.amount}
      numberCertificates: ${certificateList.numberCertificates}

      `,
    };
    mailer(message);
    res.status(200).json(certificateList);
  } catch (err) {
    res.status(500).json(err);
  }
});

certificateRoute.get("/", async (req, res) => {
  try {
    const certificateList = await Certificate.findAll();
    // console.log(certificateList);
    res.status(200).json(certificateList);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

certificateRoute.put("/:id", async (req, res, next) => {
  try {
    const currentCert = await Certificate.findByPk(Number(req.params.id));

    const { id, name, email, amount, numberCertificates } = req.body;
    if (!currentCert) {
      res
        .status(404)
        .json({ success: false, message: "Нет такого сертификата" });
      return;
    }
    if (currentCert) {
      (currentCert.id = id),
        (currentCert.name = name),
        (currentCert.email = email),
        (currentCert.amount = amount),
        (currentCert.numberCertificates = numberCertificates),
        (currentCert.status = false);
      await currentCert.save();
      console.log("server ====>", currentCert.status, req.body);
      res.json(currentCert);
    }
  } catch (er) {
    next(er);
  }
});

module.exports = certificateRoute;

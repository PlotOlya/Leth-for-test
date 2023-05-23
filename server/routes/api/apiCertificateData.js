const { v4: uuidv4 } = require("uuid");

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
      numberCertificates: uuidv4(),

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
    res.status(200).json({ certificateList });
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

module.exports = certificateRoute;

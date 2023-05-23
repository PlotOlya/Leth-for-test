const { v4: uuidv4 } = require("uuid");

const certificateRoute = require("express").Router();

const { Certificate } = require("../../db/models");

certificateRoute.post("/", async (req, res) => {
  try {
    const data = req.body;
    const certificate = await Certificate.create({
      name: data.name,
      email: data.email,
      amount: data.amount,
      numberCertificates: uuidv4(),
      status: "activ",
    });
    // console.log(certificateList);
    res.status(200).json(certificate);
  } catch (err) {
    res.status(500).json(err);
  }
});

certificateRoute.get("/", async (req, res) => {
  try {
    const certificateList = await Certificate.findAll();
    console.log(certificateList);
    res.status(200).json(certificateList);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = certificateRoute;

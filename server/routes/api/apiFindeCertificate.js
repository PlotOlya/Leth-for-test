const certificateRoute = require("express").Router();

const { Certificate } = require("../../db/models");

certificateRoute.post("/", async (req, res) => {
  try {
    const { inputVal } = req.body;

    // console.log("111", inputVal);
    const currentcertificate = await Certificate.findOne({
      where: { numberCertificates: inputVal },
    });
    // console.log(currentcertificate);
    res.status(200).json(currentcertificate);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
module.exports = certificateRoute;

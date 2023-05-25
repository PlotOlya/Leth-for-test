const certificateRoute = require('express').Router();

const { Certificate } = require('../../db/models');

certificateRoute.post('/', async (req, res) => {
  try {
    const { inputVal } = req.body;
    if (req.session.adminId) {
      const currentcertificate = await Certificate.findOne({
        where: { numberCertificates: inputVal },
      });
      if (!currentcertificate) {
        res
          .status(404)
          .json({ success: false, message: 'Нет такого сертификата' });
        return;
      }
      res.status(200).json(currentcertificate);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
module.exports = certificateRoute;

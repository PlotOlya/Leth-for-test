require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;

const serverConfig = require('./config/serverConfig');
const ReservationTable = require('./routes/api/apiReservationTableInit');
const certificateTable = require('./routes/api/apiCertificateData');
const findeCertificate = require('./routes/api/apiFindeCertificate');
const mainReservation = require('./routes/api/apiMainReservation');

const adminAuthorization = require('./routes/api/apiAdminAuthorization');

// config
serverConfig(app);

// routing

app.use('/api/auth', adminAuthorization);

app.use('/api/admin/reservation', ReservationTable);
app.use('/api/certificate', certificateTable);
app.use('/api/findeCertificate', findeCertificate);
app.use('/api/mainReservation', mainReservation);
app.use('/api/admin/certificate', certificateTable);

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}

require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT ?? 5000;

const serverConfig = require('./config/serverConfig');
const ReservationTable = require('./routes/api/apiReservationTableInit');
const certificateTable = require('./routes/api/apiCertificateData');
const mainReservation = require('./routes/api/apiMainReservation');
// config
serverConfig(app);

// routing
app.use('/api/admin/reservation', ReservationTable);
app.use('/api/admin/certificate', certificateTable);
app.use('/api/mainReservation', mainReservation);

try {
  app.listen(PORT, () => {
    console.log(`*** Server started at ${PORT} port ***`);
  });
} catch (error) {
  console.log(error.message);
}

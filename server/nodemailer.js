const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'max_nazarow@mail.ru',
      pass: 'UQ4TheFGGes8P5ee4Xqu',
    },
  },
  {
    from: 'Mailer Test <max_nazarow@mail.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;

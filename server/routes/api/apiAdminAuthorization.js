const adminAuthorization = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');

adminAuthorization.post('/', async (req, res) => {
  const { login, password } = req.body;
  try {
    const existingUser = await Admin.findOne({ where: { login } });

    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (
      existingUser
      && (await bcrypt.compare(password, existingUser.password))
    ) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.user = existingUser;
      res.json({ id: existingUser.id, login: existingUser.login });
    } else {
      res
        .status(401)
        .json({ error: 'Такого пользователя нет либо пароли не совпадают' });
    }
  } catch (error) {
    res.status(500).json({ error: 'I(server) fell down' });
  }
});

adminAuthorization.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = adminAuthorization;

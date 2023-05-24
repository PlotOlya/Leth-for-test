const adminAuthorization = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../../db/models');

adminAuthorization.post('/login', async (req, res) => {
  const { login, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ where: { login } });

    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (
      existingAdmin &&
      (await bcrypt.compare(password, existingAdmin.password))
    ) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.adminId = existingAdmin.id;
      res.json({ id: existingAdmin.id, login: existingAdmin.login });
    } else {
      res
        .status(401)
        .json({ error: 'Такого пользователя нет либо пароли не совпадают' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'I(server) fell down' });
  }
});

adminAuthorization.get('/admin', (req, res) => {
  try {
    console.log('res.locals', res.locals);
    const { admin } = res.locals;
    console.log('admin', admin);
    if (admin) {
      res.json({
        isLoggedIn: true,
        admin: {
          id: admin.id,
          name: admin.login,
        },
      });
    } else {
      res.status(404).json({ isLoggedIn: false });
    }
  } catch (error) {
    console.error(error);
  }
});

adminAuthorization.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ success: true });
  });
});

module.exports = adminAuthorization;

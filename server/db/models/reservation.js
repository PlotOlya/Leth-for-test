const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate() {}
  }
  Reservation.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      table: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};

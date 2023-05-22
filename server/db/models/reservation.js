const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate({ Table }) {
      this.belongsTo(Table, { foreignKey: 'table_id' });
    }
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
      table_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tables',
          key: 'id',
        },
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

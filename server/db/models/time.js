const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Time extends Model {
    static associate({ Reservation }) {
      this.hasMany(Reservation, { foreignKey: 'time_id' });
    }
  }
  Time.init(
    {
      time: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Time',
    },
  );
  return Time;
};

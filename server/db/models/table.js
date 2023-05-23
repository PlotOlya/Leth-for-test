const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate({ Reservation }) {
      this.hasMany(Reservation, { foreignKey: 'table_id' });
    }
  }
  Table.init(
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Table',
    },
  );
  return Table;
};

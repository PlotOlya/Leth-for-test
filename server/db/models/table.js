const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Table extends Model {
    static associate() {}
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
    }
  );
  return Table;
};

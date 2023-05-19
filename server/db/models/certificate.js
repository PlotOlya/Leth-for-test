const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificate.init({
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
    numberCertificates: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Certificate',
  });
  return Certificate;
};

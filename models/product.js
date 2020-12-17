'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.hasMany(models.Transaction)
      Product.belongsToMany(models.User, {through: models.Transaction})
    }
    getDate(){
      return new Date(this.departure_date).toDateString()
    }
  };
  Product.init({
    brand: DataTypes.STRING,
    type: DataTypes.TEXT,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
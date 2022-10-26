'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Review.hasMany(models.ReviewImages, {foreignKey: 'reviewId'}) //uncomment when ReviewImages has been made
      Review.belongsTo(models.User, {foreignKey: 'ownerId'})
    }
  }
  Review.init({
    review: DataTypes.STRING,
    stars: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};

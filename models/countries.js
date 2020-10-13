module.exports = function (sequelize, DataTypes) {
    const Countries = sequelize.define("Countries", {
      name: {
        type: DataTypes.STRING,
      },
    });
    return Countries;
  };
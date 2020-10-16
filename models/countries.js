//BRING IN SEQUELIZE FOR COUNTRIES TABLE AND ASSOCIATE POSTS TABLE================

module.exports = function (sequelize, DataTypes) {
    const Country = sequelize.define("Country", {
      name: {
        type: DataTypes.STRING,
      },
    });

    Country.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Country.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
    
    return Country;
  };
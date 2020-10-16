//BRING IN SEQUELIZE FOR USER TABLE AND ASSOCIATE POSTS TABLE================

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      full_name: {
        type: DataTypes.STRING,
        required: true
      },
      numOfPosts: {
        type: DataTypes.INTEGER,
        required: true
      },
    });

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Post, {
          onDelete: "cascade"
        });
      };
      
    return User;
};
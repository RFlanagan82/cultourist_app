module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define("User", {
      full_name: {
        type: DataTypes.STRING,
      },
      numOfPosts: {
        type: DataTypes.INTEGER
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
// TODO: Add in a hook to delete the main photo, if the main photo is
// stored/hosted by us.
'use strict';
module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        content: DataTypes.STRING,
        photo: DataTypes.STRING,
        title: DataTypes.STRING
    });
    Post.associate = function(models) {
        Post.belongsTo(models.User, {
            onDelete: 'CASCADE',
        });
        Post.hasMany(models.Comment);
        Post.belongsToMany(models.Category, {
            through: 'categorizedAs',
            onDelete: 'CASCADE',
        });
        Post.belongsTo(models.Post, {
            as: 'submissionTo',
            foreignKey: 'PostId',
            onDelete: 'SET NULL',
        });
    }
    return Post;
};

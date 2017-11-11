'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: DataTypes.STRING
  });
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, {
      onDelete: 'SET NULL'
    });
    // This is the comment to which the current comment replies.
    // We track whether or not a comment was a reply to another
    // comment. If it was not, then this may be null, in which
    // case the comment was in reply to a post, directly.
    Comment.belongsTo(models.Comment, {
      as: 'replyTo',
      onDelete: 'SET NULL',
    });
    Comment.belongsTo(models.Post, {
      onDelete: 'CASCADE'
    })
  }
  return Comment;
};

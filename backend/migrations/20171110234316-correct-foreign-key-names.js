'use strict';

/*
 * Sequelize convention requires that foreign key names start with a
 * capital letter. Changing db column names to reflect that convenion
 * rather than changing all the models to fit.
 */

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.renameColumn('Posts', 'userId', 'UserId')
             .then(() => {
                 return queryInterface.renameColumn(
                    'Comments', 'postId', 'PostId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'Comments', 'userId', 'UserId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'categorizedAs', 'postId', 'PostId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'categorizedAs', 'categoryId', 'CategoryId')
             })
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.renameColumn('Posts', 'UserId', 'userId')
             .then(() => {
                 return queryInterface.renameColumn(
                    'Comments', 'PostId', 'postId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'Comments', 'UserId', 'userId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'categorizedAs', 'PostId', 'postId')
             })
             .then(() => {
                 return queryInterface.renameColumn(
                    'categorizedAs', 'CategoryId', 'categoryId')
             })
  }
};

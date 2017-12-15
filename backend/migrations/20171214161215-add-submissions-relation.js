'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Posts', 'PostId', {
          type: Sequelize.INTEGER,
          references: {
              model: 'Posts',
              key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Posts', 'PostId');
  }
};

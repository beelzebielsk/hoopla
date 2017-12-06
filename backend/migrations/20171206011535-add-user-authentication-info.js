'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Users', 'username', {
                allowNull: false,
                type: Sequelize.STRING,
                defaultValue: false
            })
        .then(() => {
            return queryInterface.addColumn(
                'Users', 'password', {
                    allowNull: false,
                    type: Sequelize.STRING,
                    defaultValue: false
                });
        });
    },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Users', 'username')
      .then( () => {
          return queryInterface.removeColumn('Users', 'password');
      });
  }
};

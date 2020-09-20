'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         * New migration: npx sequelize migration:generate --name Users
         * Run the migration: npx sequelize db:migrate
         */

        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: Sequelize.STRING,
                unique: true,
            },
            password: {
                type: Sequelize.STRING,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    },
};

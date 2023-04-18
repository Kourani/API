'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    options.tableName = 'Images'
    return queryInterface.bulkInsert(options, [
      {
    preview: true,
    url: 'Avenger',
    imagableType:'demo@user.io',
    },
    {
      preview: false,
      url: 'Avenger',
      imagableType:'demo@user.io',
      },
      {
        preview: false,
        url: 'Avenger',
        imagableType:'demo@user.io',
        },
    ], {})
  },


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

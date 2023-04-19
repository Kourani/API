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


    options.tableName = 'Reviews'
    return queryInterface.bulkInsert(options, [
        {
        review: 'Lost',
        stars: 5,
        },

        {
          review: 'Lost2',
          stars: 4,
        },

        {
        review: 'Lost1',
        stars: 3,
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

    options.tableName = 'Reviews'
    return queryInterface.bulkDelete(options,{
      review, stars
    }, {})
  }
};

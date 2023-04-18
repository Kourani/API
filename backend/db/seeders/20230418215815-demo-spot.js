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

    options.tableName = 'Users'
    return queryInterface.bulkInsert(options, [
      {
    address: 'Lost',
    city: 'Avenger',
    state:'demo@user.io',
    country:'Demo-lition',
    latitude:'Demo-lition',
    longitude:'Demo-lition',
    name:'Demo-lition',
    description:'Demo-lition',
    price: 5,

    },
    {
      address: 'Lost',
      city: 'Avenger',
      state:'demo@user.io',
      country:'Demo-lition',
      latitude:'Demo-lition',
      longitude:'Demo-lition',
      name:'Demo-lition',
      description:'Demo-lition',
      price: 5,
    },
    {
      address: 'Lost',
      city: 'Avenger',
      state:'demo@user.io',
      country:'Demo-lition',
      latitude:'Demo-lition',
      longitude:'Demo-lition',
      name:'Demo-lition',
      description:'Demo-lition',
      price: 5,
    }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Spot')

};

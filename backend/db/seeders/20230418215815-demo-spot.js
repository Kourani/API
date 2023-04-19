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

    options.tableName = 'Spots'
    return queryInterface.bulkInsert(options, [
      {
    address: 'Lost',
    city: 'Avenger',
    state:'demo@user.io',
    country:'Demo-lition',
    latitude:100.5,
    longitude:'77.3',
    name:'Demo-lition',
    description:'Demo-lition',
    price: 53.4,

    },
    {
      address: 'Lost',
      city: 'Avenger',
      state:'demo@user.io',
      country:'Demo-lition',
      latitude:20.5,
      longitude:98.2,
      name:'Demo-lition',
      description:'Demo-lition',
      price: 52.1,
    },
    {
      address: 'Lost',
      city: 'Avenger',
      state:'demo@user.io',
      country:'Demo-lition',
      latitude:23.5,
      longitude:66.2,
      name:'Demo-lition',
      description:'Demo-lition',
      price: 500,
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

    options.tableName = 'Spots'
    return queryInterface.bulkDelete(options,{
        address, city, state,
        country, latitude, longitude, name,
        description, price
      }, {})
  }}

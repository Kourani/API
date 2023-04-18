'use strict';



const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Bookings'
    return queryInterface.bulkInsert(options, [
      {
    startDate: 'Lost',
    endDate: 'Avenger',
    },
    {
      startDate: 'Lost',
      endDate: 'Avenger',
    },
    {
      startDate: 'Lost',
      endDate: 'Avenger',
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

    await queryInterface.bulkDelete('Booking')
  }
};

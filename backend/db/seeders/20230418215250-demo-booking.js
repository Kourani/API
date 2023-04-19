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
    endDate: 'Aenger'
    },
    {
      startDate: 'Lost',
      endDate: 'Avenr',
    },
    {
      startDate: 'Lost',
      endDate: 'Avengr'
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

    options.tableName = 'Bookings'
    return queryInterface.bulkDelete(options,{
      stateDate, endDate
    }, {})
  }
};

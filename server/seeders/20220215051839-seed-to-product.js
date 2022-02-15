"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const product = require("../data/product.json");

    product.forEach((product) => {
      product.createdAt = new Date();
      product.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Products", product);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};

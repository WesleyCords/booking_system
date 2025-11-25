"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Services",
      [
        {
          title: "Corte de Cabelo",
          description: "Corte de cabelo masculino e feminino",
          duration: 30,
          price: 25.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: "Manicure",
          description: "Manicure e pedicure",
          duration: 45,
          price: 40.0,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Services", null, {})
  },
}

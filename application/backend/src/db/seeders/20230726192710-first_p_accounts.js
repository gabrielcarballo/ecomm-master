/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('personal_accounts', [{
      cpf: '12345678910',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    },
    {
      cpf: '98765432101',
      name: 'Alice Johnson',
      email: 'alicejohnson@yahoo.com',
      password: 'qwerty',
    },
    {
      cpf: '56789012345',
      name: 'Michael Smith',
      email: 'michaelsmith@hotmail.com',
      password: 'abcdef',
    },
    {
      cpf: '90817263544',
      name: 'Emma Williams',
      email: 'emmawilliams@gmail.com',
      password: 'password',
    },
    {
      cpf: '12309876543',
      name: 'David Brown',
      email: 'davidbrown@yahoo.com',
      password: 'test123',
    },
    {
      cpf: '19283746550',
      name: 'Olivia Jones',
      email: 'oliviajones@hotmail.com',
      password: 'hello123',
    },
    {
      cpf: '11223344556',
      name: 'Michael Johnson',
      email: 'michaeljohnson@gmail.com',
      password: 'qwerty123',
    },
    {
      cpf: '99887766554',
      name: 'Alice Smith',
      email: 'alicesmith@yahoo.com',
      password: 'abc123',
    },
    {
      cpf: '45362718911',
      name: 'David Johnson',
      email: 'davidjohnson@hotmail.com',
      password: 'test456',
    },
    {
      cpf: '76543210987',
      name: 'Emma Brown',
      email: 'emmabrown@gmail.com',
      password: 'abcdef123',
    },
    ], {});
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('personal_accounts', null, {});
  },
};

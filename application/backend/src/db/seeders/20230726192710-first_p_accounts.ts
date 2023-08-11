/* eslint-disable max-lines-per-function */
/** @type {import('sequelize-cli').Migration} */
import { QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('personal_accounts', [{
      cpf: '12345678910',
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '98765432101',
      name: 'Alice Johnson',
      email: 'alicejohnson@yahoo.com',
      password: 'qwerty',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '56789012345',
      name: 'Michael Smith',
      email: 'michaelsmith@hotmail.com',
      password: 'abcdef',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '90817263544',
      name: 'Emma Williams',
      email: 'emmawilliams@gmail.com',
      password: 'password',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '12309876543',
      name: 'David Brown',
      email: 'davidbrown@yahoo.com',
      password: 'test123',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '19283746550',
      name: 'Olivia Jones',
      email: 'oliviajones@hotmail.com',
      password: 'hello123',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '11223344556',
      name: 'Michael Johnson',
      email: 'michaeljohnson@gmail.com',
      password: 'qwerty123',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '99887766554',
      name: 'Alice Smith',
      email: 'alicesmith@yahoo.com',
      password: 'abc123',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '45362718911',
      name: 'David Johnson',
      email: 'davidjohnson@hotmail.com',
      password: 'test456',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    {
      cpf: '76543210987',
      name: 'Emma Brown',
      email: 'emmabrown@gmail.com',
      password: 'abcdef123',
      status: 1,
      balance: 0,
      accountNumber: uuidv4(),
    },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('personal_accounts', {});
  },
};

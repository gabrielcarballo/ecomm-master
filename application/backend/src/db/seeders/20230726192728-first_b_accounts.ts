/* eslint-disable max-lines-per-function */

import { QueryInterface } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('business_accounts', [
      {
        cnpj: '12345678910111',
        name: 'ABC Corporation',
        email: 'abc@example.com',
        password: 'abcdef123',
      },
      {
        cnpj: '98765432101122',
        name: 'XYZ Industries',
        email: 'xyz@example.com',
        password: 'qwerty123',
      },
      {
        cnpj: '56789012345678',
        name: 'Acme Corporation',
        email: 'acme@example.com',
        password: 'test123',
      },
      {
        cnpj: '90817263544553',
        name: 'Tech Solutions Ltd.',
        email: 'tech@example.com',
        password: 'hello123',
      },
      {
        cnpj: '11223344556677',
        name: 'Global Enterprises',
        email: 'global@example.com',
        password: 'test456',
      },
      {
        cnpj: '19283746550192',
        name: 'Innovative Systems',
        email: 'innovative@example.com',
        password: 'abc123',
      },
      {
        cnpj: '99887766554433',
        name: 'DataTech Solutions',
        email: 'datatech@example.com',
        password: 'qwerty456',
      },
      {
        cnpj: '45362718911098',
        name: 'Alpha Inc.',
        email: 'alpha@example.com',
        password: 'hello456',
      },
      {
        cnpj: '76543210987654',
        name: 'TechVille Corporation',
        email: 'techville@example.com',
        password: 'test789',
      },
      {
        cnpj: '11121314151617',
        name: 'InnovaTech Solutions',
        email: 'innovatech@example.com',
        password: 'abcdef789',
      },
    ], {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('business_accounts', {});
  },
};

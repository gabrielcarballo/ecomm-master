/* eslint-disable max-lines-per-function */
import { DataTypes, QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('business_accounts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cnpj: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    createdAt: { allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'created_at' },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date(),
      field: 'updated_at',
    },
    balance: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => uuidv4(),
      field: 'account_number',
    },
  }, {});
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('business_accounts');
}

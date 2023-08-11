import { DataTypes, QueryInterface } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable('personal_accounts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cpf: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    status: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    createdAt: { allowNull: false, type: DataTypes.DATE, defaultValue: new Date() },
    updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: new Date() },
    balance: { type: DataTypes.FLOAT, defaultValue: 0, allowNull: false },
    accountNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => uuidv4(),
    },
  }, {});
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('personal_accounts');
}

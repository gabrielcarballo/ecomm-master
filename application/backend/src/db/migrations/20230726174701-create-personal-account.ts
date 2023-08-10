import { DataTypes, QueryInterface } from 'sequelize';

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
    createdAt: { allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date() },
    updatedAt: { allowNull: false,
      type: DataTypes.DATE,
      defaultValue: new Date() } });
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('personal_accounts');
}

import { DataTypes, QueryInterface } from 'sequelize';

export async function up(queryInterface: QueryInterface): Promise<void> {
  await queryInterface.createTable('transactions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    description: { type: DataTypes.STRING },
    date: { type: DataTypes.DATE, allowNull: false, defaultValue: new Date() },
    amount: { type: DataTypes.FLOAT, allowNull: false, validate: { min: 0.01 } },
    sender: { type: DataTypes.STRING, allowNull: false },
    receiver: { type: DataTypes.STRING, allowNull: false },
    cashback: { type: DataTypes.FLOAT },
  }, {});
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable('transactions');
}

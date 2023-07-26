async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('personal_accounts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cpf: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    status: { type: Sequelize.BOOLEAN },
    createdAt: { allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
    updatedAt: { allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') } });
}
async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('personal_accounts');
}

module.exports = { up, down };

import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { ConflictError } from '../../helpers/errorHandler/errorHandler';
import db from '.';
import CPF from '../../entities/CPF';

export default class PersonalAccount extends Model {
  declare public id: number;
  declare public cpf: string;
  declare public name: string;
  declare public email: string;
  declare public password: string;
  declare public status: boolean;
  declare public balance: number;
}

PersonalAccount.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isCpf(cpf: string) {
        const isValid = new CPF(cpf).validateCpf();
        if (!isValid) {
          console.log('CPF inválido');
          throw new ConflictError('CPF inválido');
        }
      },
    },
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    defaultValue: () => uuidv4(),
  },
}, {
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  sequelize: db,
  modelName: 'personal_accounts',
  timestamps: true,
});

PersonalAccount.addHook('beforeUpdate', (model: PersonalAccount, _options) => {
  if (model.changed('cpf')) throw new Error('Cannot update CPF attribute.');
});

import { Model, STRING, BOOLEAN, INTEGER } from 'sequelize';
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
}

PersonalAccount.init({
  id: {
    type: INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpf: {
    type: STRING,
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
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  status: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'personal_accounts',
  timestamps: false,
});

PersonalAccount.addHook('beforeUpdate', (model: PersonalAccount, _options) => {
  if (model.changed('cpf')) throw new Error('Cannot update CPF attribute.');
});

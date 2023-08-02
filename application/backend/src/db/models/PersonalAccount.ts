import { Model, STRING, BOOLEAN, NUMBER } from 'sequelize';
import db from '.';
import CPF from '../../types/CPF';

interface PersonalAccountAttributes {
  id: number,
  cpf: string,
  name: string,
  email: string,
  password: string,
  status: boolean,
}

class PersonalAccount extends Model<PersonalAccountAttributes> {
  declare public id: number;
  declare public cpf: string;
  declare public name: string;
  declare public email: string;
  declare public password: string;
  declare public status: boolean;
}

PersonalAccount.init({
  id: {
    type: NUMBER,
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
        try {
          const isValid = new CPF(cpf);
          isValid.validateCpf();
        } catch (err: unknown) {
          if (err instanceof Error) {
            throw new Error(err.message);
          }
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

PersonalAccount.beforeCreate((account) => {
  const cpf = new CPF(account.cpf);
  if (!cpf.validateCpf()) {
    throw new Error('CPF inválido');
  }
});

PersonalAccount.beforeUpdate((account) => {
  const cpf = new CPF(account.cpf);
  if (!cpf.validateCpf()) {
    throw new Error('CPF inválido');
  }
});

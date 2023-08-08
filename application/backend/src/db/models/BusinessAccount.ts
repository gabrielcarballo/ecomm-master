import { Model, STRING, BOOLEAN, INTEGER } from 'sequelize';
import db from '.';
import CNPJ from '../../entities/CNPJ';

interface BusinessAccountAttributes {
  id: number,
  cnpj: string,
  name: string,
  email: string,
  password: string,
  status: boolean,
}

class BusinessAccount extends Model<BusinessAccountAttributes> {
  declare public id: number;
  declare public cnpj: string;
  declare public name: string;
  declare public email: string;
  declare public password: string;
  declare public status: boolean;
}
BusinessAccount.init({
  id: {
    type: INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cnpj: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isCnpj(cnpj: string) {
        const isValid = new CNPJ(cnpj).validateCnpj();
        if (!isValid) {
          throw new Error('CNPJ inválido');
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
  modelName: 'business_accounts',
  timestamps: false,
});

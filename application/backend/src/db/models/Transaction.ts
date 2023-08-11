/* eslint-disable @typescript-eslint/naming-convention */
import { Model, DataTypes } from 'sequelize';
import db from '.';
import CPF from '../../entities/CPF';

export default class Transaction extends Model {
  declare public id: number;
  declare public description: string;
  declare public date: Date;
  declare public amount: number;
  declare public sender: CPF;
  declare public receiver: CPF;
  declare public cashback: number;
}

Transaction.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUUID: 4,
    },
  },
  receiver: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUUID: 4,
    },
  },
  cashback: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'transactions',
  timestamps: false,
});

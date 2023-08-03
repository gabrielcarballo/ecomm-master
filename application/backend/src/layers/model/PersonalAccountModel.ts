import PersonalAccount from '../../db/models/PersonalAccount';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

export default class PersonalAccountModel {
  public static async createAccount(
    { cpf, email, name, password }: PersonalAccountAtt,
  ) {
    const accountToAdd = await PersonalAccount.create({
      cpf,
      email,
      name,
      password,
    });
    if (accountToAdd) return accountToAdd;
    return null;
  }
}

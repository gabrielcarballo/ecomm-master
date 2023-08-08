import { ConflictError } from '../../helpers/errorHandler/errorHandler';
import BusinessAccount from '../../db/models/BusinessAccount';
import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

export default class PersonalAccountModel {
  public static async createAccount(
    { cnpj, email, name, password }: BusinessAccountAtt,
  ): Promise<BusinessAccount | null> {
    const accountExists = await this.getAccountByCnpj({ cnpj });
    if (accountExists) {
      throw new ConflictError('ACCOUNT_ALREADY_EXISTS');
    }
    const accountToAdd = await BusinessAccount.create({
      cnpj,
      email,
      name,
      password,
    });
    return accountToAdd;
  }

  public static async getAccountByCnpj(
    cnpj: Pick<BusinessAccountAtt, 'cnpj'>,
  ): Promise<BusinessAccount | null> {
    return BusinessAccount.findOne({ where: cnpj });
  }
}

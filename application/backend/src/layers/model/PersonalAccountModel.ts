import { ConflictError } from '../../helpers/errorHandler/errorHandler';
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
  ): Promise<PersonalAccount | null> {
    const accountExists = await this.getAccountByCpf({ cpf });
    if (accountExists) {
      throw new ConflictError('ACCOUNT_ALREADY_EXISTS');
    }
    const accountToAdd = await PersonalAccount.create({
      cpf,
      email,
      name,
      password,
    });
    return accountToAdd;
  }

  public static async getAccountByCpf(
    cpf: Pick<PersonalAccountAtt, 'cpf'>,
  ): Promise<PersonalAccount | null> {
    return PersonalAccount.findOne({ where: cpf });
  }
}

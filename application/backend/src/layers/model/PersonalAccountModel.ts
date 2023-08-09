import { ConflictError } from '../../helpers/errorHandler/errorHandler';
import PersonalAccount from '../../db/models/PersonalAccount';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';
import { payloadType } from '../../auth/index';

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

  public static async getAccountToLogin(
    email: string,
    password: string,
  ): Promise<PersonalAccount | null> {
    return PersonalAccount.findOne({ where: { email, password } });
  }

  public static async loginUser(payload: payloadType) {
    const { email, password } = payload;
    const isUserValid = await this.getAccountToLogin(email, password);
    if (isUserValid) {
      return true;
    }
    throw new ConflictError('Email or password is invalid');
  }
}

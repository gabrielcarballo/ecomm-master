import UpdateAccountRequest from '../../types/updateAccount.request';
import { ConflictError } from '../../helpers/errorHandler/errorHandler';
import BusinessAccount from '../../db/models/BusinessAccount';
import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';
import { payloadType } from '../../auth';

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

  public static async getAccountToLogin(
    email: string,
    password: string,
  ): Promise<BusinessAccount | null> {
    return BusinessAccount.findOne({ where: { email, password } });
  }

  public static async loginUser(email: string, password: string) {
    const isUserValid = await this.getAccountToLogin(email, password);
    if (isUserValid) {
      return true;
    }
    throw new ConflictError('Email or password is invalid');
  }

  public static async updateAccount(
    newInfo: Omit<UpdateAccountRequest, 'authorization'>,
    currentInfo: payloadType,
  ) {
    const { email: newEmail, name: newName, password: newPassword } = newInfo;
    const { email, password } = currentInfo;
    console.log('novos', newEmail, newName, newPassword);
    console.group('atuais', email, password);
    const updatedAccount = await BusinessAccount.update(
      { email: newEmail, name: newName, password: newPassword },
      { where:
        {
          email,
          password,
        },
      },
    );
    console.log(updatedAccount);
    return updatedAccount;
  }
}

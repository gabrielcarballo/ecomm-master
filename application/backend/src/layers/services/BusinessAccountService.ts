import UpdateAccountRequest from '../../types/updateAccount.request';
import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';
import BusinessAccount from '../../db/models/BusinessAccount';
import BusinessAccountModel from '../model/BusinessAccountModel';
import { DecodedPayloadType, decodeToken, payloadType } from '../../auth/index';

export default class BusinessAccountService {
  public static async createAccount(
    { name, cnpj, email, password }: BusinessAccountAtt,
  ): Promise<BusinessAccount | null> {
    const account = await BusinessAccountModel.createAccount({
      name, cnpj, email, password,
    });
    return account;
  }

  public static async loginUser(
    payload: payloadType,
  ): Promise<boolean> {
    const { email, password } = payload;
    const isUserValid = await BusinessAccountModel.loginUser(email, password);
    return isUserValid;
  }

  public static async updateAccount(payload: UpdateAccountRequest) {
    const { email, name, password, authorization } = payload;
    if (!email && !name && !password) {
      throw new Error('Updated info must be provided');
    }
    const newInfo = { email, name, password };
    const { payload: {
      email: currentEmail,
      password: currentPassword } } = decodeToken(authorization) as DecodedPayloadType;

    if (currentEmail && currentPassword) {
      const updatedAccount = await BusinessAccountModel.updateAccount(
        newInfo,
        { email: currentEmail, password: currentPassword },
      );
      return updatedAccount;
    }
  }

  public static async deleteAccount(auth: string) {
    const { payload: { email, password } } = decodeToken(auth) as DecodedPayloadType;
    const deletedAccount = await BusinessAccountModel.deleteAccount({ email, password });
    return deletedAccount;
  }
}

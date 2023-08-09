import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';
import BusinessAccount from '../../db/models/BusinessAccount';
import BusinessAccountModel from '../model/BusinessAccountModel';
import { payloadType } from '../../auth/index';

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
}

import { BusinessAccountAtt } from '../../middlewares/validations/schemas/BusinessAccountSchema';
import BusinessAccount from '../../db/models/BusinessAccount';
import BusinessAccountModel from '../model/BusinessAccountModel';

export default class BusinessAccountService {
  public static async createAccount(
    { name, cnpj, email, password }: BusinessAccountAtt,
  ): Promise<BusinessAccount | null> {
    const account = await BusinessAccountModel.createAccount({
      name, cnpj, email, password,
    });

    return account;
  }
}

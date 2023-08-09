import PersonalAccount from '../../db/models/PersonalAccount';
import PersonalAccountModel from '../model/PersonalAccountModel';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';
import { payloadType } from '../../auth/index';

class PersonalAccountService {
  public static async createAccount(
    account: PersonalAccountAtt,
  ): Promise<PersonalAccount | null> {
    const accountToAdd = await PersonalAccountModel.createAccount(account);
    return accountToAdd;
  }

  public static async loginUser(
    payload: payloadType,
  ): Promise<boolean> {
    const token = await PersonalAccountModel.loginUser(payload);
    return token;
  }
}
export default PersonalAccountService;

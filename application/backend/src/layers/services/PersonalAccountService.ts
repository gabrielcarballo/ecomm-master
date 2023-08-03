import PersonalAccountModel from '../model/PersonalAccountModel';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';

class PersonalAccountService {
  public static async createAccount(
    account: PersonalAccountAtt,
  ): Promise<PersonalAccountAtt | null> {
    const accountToAdd = await PersonalAccountModel.createAccount(account);
    if (accountToAdd) return accountToAdd;
    return null;
  }
}

export default PersonalAccountService;

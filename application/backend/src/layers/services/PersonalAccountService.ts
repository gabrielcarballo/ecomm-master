import PersonalAccount from '../../db/models/PersonalAccount';
import PersonalAccountModel from '../model/PersonalAccountModel';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';

class PersonalAccountService {
  public static async createAccount(
    account: PersonalAccountAtt,
  ): Promise<PersonalAccount | null> {
    const accountToAdd = await PersonalAccountModel.createAccount(account);
    return accountToAdd;
  }
}

export default PersonalAccountService;

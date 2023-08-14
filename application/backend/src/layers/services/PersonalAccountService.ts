import UpdateAccountRequest from '../../types/updateAccount.request';
import { BadRequestError } from '../../helpers/errorHandler/errorHandler';
import PersonalAccount from '../../db/models/PersonalAccount';
import PersonalAccountModel from '../model/PersonalAccountModel';
import { PersonalAccountAtt } from '../../middlewares/validations/schemas/PersonalAccountSchema';
import { decodeToken, payloadType, DecodedPayloadType } from '../../auth/index';

export default class PersonalAccountService {
  public static async createAccount(
    account: PersonalAccountAtt,
  ): Promise<PersonalAccount | null> {
    const accountToAdd = await PersonalAccountModel.createAccount(account);
    return accountToAdd;
  }

  public static async loginUser(
    payload: payloadType,
  ): Promise<boolean> {
    const isUserValid = await PersonalAccountModel.loginUser(payload);
    return isUserValid;
  }

  public static async updateAccount(
    info: UpdateAccountRequest,
  ) {
    const { email, name, password, authorization } = info;
    if (!email && !name && !password) {
      throw new BadRequestError('Updated info must be provided');
    }
    const newInfo = { email, name, password };
    const { payload: {
      email: currentEmail,
      password: currentPassword } } = decodeToken(authorization) as DecodedPayloadType;

    if (currentEmail && currentPassword) {
      const updatedAccount = await PersonalAccountModel.updateAccount(
        newInfo,
        { email: currentEmail, password: currentPassword },
      );
      return updatedAccount;
    }
  }

  public static async deleteAccount(auth: string) {
    const { payload: { email, password } } = decodeToken(auth) as DecodedPayloadType;
    const deletedAccount = await PersonalAccountModel.deleteAccount({ email, password });
    return deletedAccount;
  }
}

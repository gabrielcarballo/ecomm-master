import CNPJ from './CNPJ';
import CPF from './CPF';

export default class Transaction {
  public id: number;
  public description = '';
  public date = new Date();
  public amount: number;
  public sender: CPF | CNPJ;
  public receiver: CPF | CNPJ;
  public cashback = 0;

  constructor(
    id: number,
    amount: number,
    sender: CPF | CNPJ,
    receiver: CPF | CNPJ,
    cashback: number,
    description?: string,
  ) {
    this.id = id;
    this.amount = amount;
    this.sender = sender;
    this.receiver = receiver;
    this.cashback = cashback;
    this.description = description || '';
  }
}

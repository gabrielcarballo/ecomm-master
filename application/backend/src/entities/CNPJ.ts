export default class CNPJ {
  private _cnpj: string;
  private _dv1: string;
  private _dv2: string;

  constructor(cnpj: string) {
    this._cnpj = cnpj.replace(/[^\d]+/g, '');
    if (this._cnpj.length !== 14) {
      throw new Error('cnpj must have 14 digits');
    }
    this._dv1 = this._cnpj[this._cnpj.length - 2];
    this._dv2 = this._cnpj[this._cnpj.length - 1];
  }

  get cnpj(): string {
    return this._cnpj;
  }

  private digitoVerificador1(): number {
    let sum = 0;
    const wheights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i <= this._cnpj.length - 3; i += 1) {
      sum += parseInt(this._cnpj[i], 10) * wheights[i];
    }
    let dv1 = sum % 11;
    dv1 = dv1 < 2 ? 0 : 11 - dv1;
    return dv1;
  }

  private digitoVerificador2(): number {
    let sum = 0;
    const wheights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i <= this._cnpj.length - 2; i += 1) {
      sum += parseInt(this._cnpj[i], 10) * wheights[i];
    }
    let dv2 = sum % 11;
    dv2 = dv2 < 2 ? 0 : 11 - dv2;
    return dv2;
  }

  validateCnpj(): boolean {
    return (
      this.digitoVerificador1() === Number(this._dv1)
    && this.digitoVerificador2() === Number(this._dv2)
    );
  }
}

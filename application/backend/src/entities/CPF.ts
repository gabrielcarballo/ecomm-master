export default class CPF {
  private _cpf: string;
  private _dv1: string;
  private _dv2: string;

  constructor(cpf: string) {
    this._cpf = cpf.replace(/[^\d]+/g, '');
    if (this._cpf.length !== 11) {
      throw new Error('CPF must have 11 digits');
    }
    this._dv1 = this._cpf[this._cpf.length - 2];
    this._dv2 = this._cpf[this._cpf.length - 1];
  }

  get cpf(): string {
    return this._cpf;
  }

  private digitoVerificador1(): number {
    let sum = 0;
    for (let i = 0; i <= this._cpf.length - 3; i += 1) {
      sum += parseInt(this._cpf[i], 10) * (10 - i);
    }
    let dv1 = sum % 11;
    dv1 = dv1 < 2 ? 0 : 11 - dv1;

    return dv1;
  }

  private digitoVerificador2(): number {
    let sum = 0;
    for (let i = 0; i <= this._cpf.length - 2; i += 1) {
      sum += parseInt(this._cpf[i], 10) * (11 - i);
    }
    let dv2 = sum % 11;
    dv2 = dv2 < 2 ? 0 : 11 - dv2;

    return dv2;
  }

  validateCpf(): boolean {
    return (
      this.digitoVerificador1() === Number(this._dv1)
    && this.digitoVerificador2() === Number(this._dv2)
    );
  }
}

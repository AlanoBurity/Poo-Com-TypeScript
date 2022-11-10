export default class Conta {
  private _saldo: number;

  constructor(depositoInicial: number) {
    this._saldo = depositoInicial;
  }

  getSaldo() {
    return this._saldo;
  }
  
  get saldo() {
    return this._saldo;
  }

  public debitar(value: number) {
    if (value > this._saldo) {
      throw new Error('Saldo_insuficiente');
    }
    this._saldo -= value;
  }
}
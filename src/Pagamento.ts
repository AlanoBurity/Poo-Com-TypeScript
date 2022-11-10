import Conta from './Conta';

interface IPrestacao {
  valor: number;
  vencimento: Date;
}
type PagamentoParams = {
  conta: Conta;
  valor: number;
  tipo: string;
  vencimento: Date;
  descricao: string;
};

export default class Pagamento {
  _conta: Conta;
  _valor: number;
  _tipo: string;
  _vencimento: Date;
  _descricao: string;
  _multa: number;
  _prestacoes: IPrestacao[];    

  constructor(params: PagamentoParams) {
    if (params.valor < 0) {
      throw new Error('Invalid-Value-negative');
    }
    this._descricao = params.descricao;
    this._vencimento = params.vencimento;
    this._conta = params.conta;
    this._valor = params.valor;
    this._tipo = params.tipo;
    this._multa = 0.2;
    this._prestacoes = [];
  }

  efetivarPagamento() {
    if (this._tipo === 'pix') {
      this.pagarViaPix();
    }
    if (this._tipo === 'boleto') {
      this.pagarViaBoleto();
    }
    if (this._tipo === 'cartao') {
      this.pagarViaCartao();
    }

    throw new Error('Meio_de_Pagamento_Inválido');
  }

  private pagarViaPix() {

  }

  private pagarViaBoleto() {

  }

  private pagarViaCartao() {

  }
} 
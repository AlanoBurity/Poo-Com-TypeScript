import Conta from './Conta';

const contaAlano = new Conta(200);

function debitarConta(conta: Conta, value: number) {
  try {
    conta.debitar(value);
  } catch (err) {
    console.log(`Saldo ${conta.saldo} insuficiente para a compra de ${value}`);
  }
}

debitarConta(contaAlano, 210);

class CuentaBancaria {
  // Propiedad privada con tipado
  #saldo: number;

  constructor(saldoInicial: number) {
    this.#saldo = saldoInicial;
  }

  depositar(cantidad: number): void {
    if (cantidad > 0) {
      this.#saldo += cantidad;
      console.log(`Has depositado $${cantidad}`);
    } else {
      console.log("El depósito debe ser mayor a 0.");
    }
  }

  mostrarSaldo(): void {
    console.log(`Saldo actual: $${this.#saldo}`);
  }
}

const miCuenta = new CuentaBancaria(100);
miCuenta.mostrarSaldo();
miCuenta.depositar(50);
miCuenta.mostrarSaldo();

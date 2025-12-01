class Restaurante{

    calcularTotal(precio: number, cantidad: number): number{
        return precio * cantidad;
    }

    aplicarDescuento(total: number, descuento: number): number{
        return total - (total * descuento/100);
    }

    calcularPropina(total: number, procentaje: number): number{
        return total * (procentaje/100);
    }
}

const miRestaurante = new Restaurante();

const total = miRestaurante.calcularTotal(12 , 3);
console.log("Total sin descuento:", total);

const totalConDescuento = miRestaurante.aplicarDescuento(total, 10);
console.log("Total con 10% de descuento:", totalConDescuento);

const propina = miRestaurante.calcularPropina(totalConDescuento , 15);
console.log("Propina 15%:", propina);




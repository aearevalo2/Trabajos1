class Auto{
    acelerar(velocidadActual: number, incremento: number): number{
       return velocidadActual + incremento;
    }

    frenar(velocidadActual: number, decremento: number): number{
        const nuevaVelocidad = velocidadActual - decremento;
        return nuevaVelocidad < 0 ? 0 : nuevaVelocidad;
    }

    recorrer(distamcia: number, tiempo: number): number {
        if (tiempo <= 0) {
            throw new Error("El tiempo debe ser mayor a 0.");
        }
        return distamcia / tiempo;
    }
}

const miAuto = new Auto();

console.log(miAuto.acelerar(50, 20));
console.log(miAuto.frenar(40, 50));
console.log(miAuto.recorrer(100, 2));
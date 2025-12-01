class Hospital {

    calcularDosis(peso: number, mgPorkg: number): number{
        return peso * mgPorkg;
    }

    calcularIMC(peso: number, altura: number): number{
        return peso / (altura * altura);
    }

    registraVisitas(visitasActuales: number , nuevas: number): number{
        return visitasActuales + nuevas;
    }
}

const hospital = new Hospital();

console.log("Dosis:" , hospital.calcularDosis(70, 5));
console.log("IMC:" , hospital.calcularIMC(70, 1.75));
console.log("Visitas:" , hospital.registraVisitas(3, 2));
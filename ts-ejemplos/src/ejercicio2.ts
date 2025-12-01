// Clase padre
class Estudiante {

  agregarNota(promedio: number, nuevaNota: number): number {
    return (promedio + nuevaNota ) / 2;

  }
   
  aprobar(nota: number, minima: number): boolean{
    return nota >= minima;
  }

  calcularfaltas(faltasActuales: number , nuevas: number): number{
    return faltasActuales + nuevas;
  }
}

const estudiante = new Estudiante();

let promedio = estudiante.agregarNota(8, 6);
console.log("Nuevo promedio:" , promedio);

let aprueba = estudiante.aprobar(promedio, 7);
console.log("Aprueba" , aprueba);

let faltas = estudiante.calcularfaltas(3, 4);
console.log("Total faltas:" , faltas);
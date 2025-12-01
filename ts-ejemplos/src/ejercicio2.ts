// Clase padre
class Animal {
  sonar() {
    console.log("El animal hace un sonido.");
  }
}
//Clase hija
class Perro extends Animal {
  sonar() {
    console.log("El perro ladra: ¡Guau guau");
  }
}
//Clase hija
class Gato extends Animal {
  sonar() {
    console.log("El gato maúlla: ¡Miau miau");
  }
}

const miAnimal = new Animal();
const miPerro = new Perro();
const miGato = new Gato();

miAnimal.sonar(); 
miPerro.sonar();  
miGato.sonar();  
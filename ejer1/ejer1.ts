abstract class Animal {
    abstract hacerSonido(): void;
  }
  
  class Perro extends Animal {
    hacerSonido(): void {
      console.log("¡Guau! ¡Guau!");
    }
  }
  
  class Gato extends Animal {
    hacerSonido(): void {
      console.log("¡Miau! ¡Miau!");
    }
  }
  
  // Ejemplo de uso
  const perro = new Perro();
  const gato = new Gato();
  
  perro.hacerSonido(); // Imprime: ¡Guau! ¡Guau!
  gato.hacerSonido(); // Imprime: ¡Miau! ¡Miau!
  
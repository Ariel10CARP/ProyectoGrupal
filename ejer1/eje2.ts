interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
  }
  
  class ListaTareas {
    private tareas: Tarea[];
  
    constructor() {
      this.tareas = [];
    }
  
    agregarTarea(tarea: Tarea): void {
      this.tareas.push(tarea);
    }
  
    marcarTareaCompleta(id: number): void {
      const tarea = this.buscarTareaPorId(id);
      if (tarea) {
        tarea.completada = true;
      }
    }
       listarTareas(): void {
    for (const tarea of this.tareas) {
      console.log(`ID: ${tarea.id}, Descripción: ${tarea.descripcion}, Completada: ${tarea.completada}`);
    }
  }

  private buscarTareaPorId(id: number): Tarea | undefined {
    return this.tareas.find(tarea => tarea.id === id);
  }
}

// Uso de la clase ListaTareas

const lista = new ListaTareas();

lista.agregarTarea({ id: 1, descripcion: 'Hacer la compra', completada: false });
lista.agregarTarea({ id: 2, descripcion: 'Hacer ejercicio', completada: false });
lista.agregarTarea({ id: 3, descripcion: 'Estudiar para el examen', completada: false });

lista.listarTareas();

lista.marcarTareaCompleta(2);

lista.listarTareas();

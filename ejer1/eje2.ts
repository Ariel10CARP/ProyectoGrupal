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
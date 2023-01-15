export class Educacion {
    id?: number;
    nombreEstudio: string;
    descripcion: string;
    fecha: string;

    constructor(nombreEstudio: string, descripcion: string, fecha: string) {
        this.nombreEstudio = nombreEstudio;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
}


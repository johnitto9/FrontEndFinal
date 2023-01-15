export class Experiencia {
    id_exp? : number;
    nombreEmpresa : string;
    descripcion : string;
    fecha   : string;

    constructor(nombreEmpresa: string, descripcion: string, fecha   : string) {
        this.nombreEmpresa = nombreEmpresa;
        this.descripcion = descripcion;
        this.fecha = fecha;
    }
}

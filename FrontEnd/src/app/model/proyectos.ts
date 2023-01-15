export class Proyectos {
        id? : number;
        nombreProyecto : string;
        fecha:  string;
        descripcion : string;
        url_foto : string;
    
        constructor(nombreProyecto: string, fecha: string, descripcion: string, url_foto: string) {
            this.nombreProyecto = nombreProyecto;
            this.descripcion = descripcion;
            this.url_foto = url_foto;
        }
    }
    

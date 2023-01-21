export class Persona{
    id?: number;
    nombre: String;
    apellido: String;
    acerca_de: String;
    url_foto: String;
    url_portada: String;

    constructor(nombre: String,apellido:String, acerca_de:String, url_foto:String, url_portada:String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.acerca_de = acerca_de;
        this.url_foto = url_foto;
        this.url_portada = url_portada;
    }

}
export class Cliente{
    nombre:string='';
    apellido:string='';
    direccion:string='';
    telefono:string='';
    email:string='';

    constructor(nombre:string, apellido:string, direccion:string, telefono:string, email:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }
}
export class Producto{

    nombre:string = '';
    precio:number = 0;
    cantidad:number = 0;
    descripcion:string = '';

    constructor(nombre:string, precio:number, cantidad:number, descripcion:string){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
    }
}
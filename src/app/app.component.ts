import { ServicioMensajeService } from './servicio-mensaje.service';
import { ProductoService } from './producto.service';
import { Producto } from './producto.Model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private servicioProducto:ProductoService,
              private servicioMensaje:ServicioMensajeService
    ){}

  ngOnInit(): void {
    this.productos = this.servicioProducto.productos;
  }

  tituloFormulario:string='Ingresar producto';
  tituloTabla:string='Mostrar producto';

  productos:Producto[]=[];



  agregarProducto(){
    let miProducto = new Producto(this.cuadroNombre, this.cuadroPrecio, this.cuadroCantidad, this.cuadroDescripcion);
    this.servicioMensaje.mostrarMensaje('nombre: ' + miProducto.nombre + '\nprecio: ' + miProducto.precio + '\ncantidad: ' + miProducto.cantidad + '\ndescripcion: ' + miProducto.descripcion);
    this.servicioProducto.agregarProdutoServicio(miProducto);
  }

  cuadroNombre:string = '';
  cuadroPrecio:number = 0;
  cuadroCantidad:number = 0;
  cuadroDescripcion:string = '';

  verProductos:boolean = false;

  clickMostrarProductos(){
    this.verProductos = false;
  }

}

import { Producto } from './producto.Model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos:Producto[]=[
    new Producto('lentejas', 3200, 154, 'lentejas marca ekono')
  ];

  agregarProdutoServicio(producto:Producto){
    this.productos.push(producto)
  }

  constructor() { }
}

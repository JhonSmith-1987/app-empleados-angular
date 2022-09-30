import { Cliente } from './cliente.Model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  clientes:Cliente[]=[
    new Cliente('kelly', 'sanchez', 'calle 83A sur 42-39', '3155376257', 'kellycitasanchez1984@hotmail.com')
  ]

  agregarClienteServicio(cliente:Cliente){
    this.clientes.push(cliente);
  }
}
